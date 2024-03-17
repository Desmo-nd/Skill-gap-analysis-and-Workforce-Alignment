from flask import Flask, send_file, request, jsonify
from sklearn.cluster import KMeans
from sklearn.feature_extraction.text import TfidfVectorizer
import joblib
import numpy as np
import pandas as pd
import string
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

training = pd.read_csv('working_best.csv')
skills = training['tokenized_skills'].tolist()

# Feature extraction using TF-IDF
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(skills)

# Apply K-means clustering
n_clusters = 3
kmeans = KMeans(n_clusters=n_clusters)
kmeans.fit(X)

skill_clusters = kmeans.predict(X)
cluster_counts = np.bincount(skill_clusters)

highest_demand_cluster = np.argmax(cluster_counts)
lowest_demand_cluster = np.argmin(cluster_counts)

joblib.dump(vectorizer, 'tfidf_vectorizer.joblib')
joblib.dump(kmeans, 'kmeans_model.joblib')

@app.route('/')
def home():
    return send_file('../FrontEnd/screens/Home.jsx')


def remove_punctuation(skill):
    return ''.join([char for char in skill if char not in string.punctuation])


@app.route('/predict', methods=['POST'])
def predict():
    vectorizer = joblib.load('tfidf_vectorizer.joblib')
    kmeans = joblib.load('kmeans_model.joblib')

    user_input = request.form['skills']
    user_skills = [skill.strip() for skill in user_input.split(',')]

    user_skills_transformed = vectorizer.transform(user_skills)

    user_skill_clusters = kmeans.predict(user_skills_transformed)

    demand_levels = []
    for cluster in user_skill_clusters:
        if cluster == highest_demand_cluster:
            demand_levels.append("High demand")
        elif cluster == lowest_demand_cluster:
            demand_levels.append("Low demand")
        else:
            demand_levels.append("Middle demand")

    predictions = []
    for skill, demand_level in zip(user_skills, demand_levels):
        clean_skill = remove_punctuation(skill)
        predictions.append({"Skill": clean_skill, "Demand Level": demand_level})

    return jsonify({"predictions": predictions})


@app.route('/high-demand-skills')
def high_demand_skills():
    vectorizer = joblib.load('tfidf_vectorizer.joblib')
    kmeans = joblib.load('kmeans_model.joblib')

    skills_series = training['tokenized_skills']
    skills = [skill.split(', ') for skill in skills_series]
    flattened_skills = [remove_punctuation(skill) for sublist in skills for skill in sublist]

    skills_transformed = vectorizer.transform(flattened_skills)

    skill_clusters = kmeans.predict(skills_transformed)

    highest_demand_cluster = np.argmax(np.bincount(skill_clusters))

    high_demand_skills_indices = np.where(skill_clusters == highest_demand_cluster)[0]

    high_demand_skills = [flattened_skills[i] for i in high_demand_skills_indices][:10]

    np.random.shuffle(high_demand_skills)  # Shuffle the list of high-demand skills

    return jsonify({"high_demand_skills": high_demand_skills})


data = pd.read_csv('working_best.csv')

@app.route('/load_data', methods=['GET'])
def load_data():
    vectorizer = TfidfVectorizer()
    X = vectorizer.fit_transform(data['Job Title'])

    n_clusters = 6
    kmeans = KMeans(n_clusters=n_clusters, random_state=10)
    kmeans.fit(X)

    joblib.dump(kmeans, 'demand_kmeans_model.joblib')

    data['cluster'] = kmeans.labels_

    high_demand_cluster = data['cluster'].value_counts().idxmax()

    clusters = {}
    for cluster_label in range(n_clusters):
        cluster_data = data[data['cluster'] == cluster_label]
        job_info = []
        for index, row in cluster_data.iterrows():
            if len(job_info) >= 10:
                break
            job_info.append({
                'Job Title': row['Job Title'],
                'tokenized_skills': row['tokenized_skills'],
                'Salary Range': row['Salary Range'],
            })
        clusters[cluster_label] = job_info

    high_demand_jobs = clusters[high_demand_cluster]

    return jsonify({'high_demand_jobs': high_demand_jobs})





if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
