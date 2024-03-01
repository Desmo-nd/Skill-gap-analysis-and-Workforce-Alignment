import numpy as np
import matplotlib.pyplot as plt


class KmeansClustering:
    
    def __init__(self,k=3):
        self.k = k
        self.centroids = None
    
    @staticmethod
    def euclidean_distance(data_point,centroids):
        return np.sqrt(np.sum((centroids-data_point)**2,axis=1))    
        
    def fit(self,X,max_iterations = 200):
        self.centroids = np.random.uniform(np.amin(X,axis=0),np.amax(X,axis=0),
                                 size=(self.k,X.shape[1])          )
        
        # iterate over the
        for _ in range(max_iterations):
            # cluster labels
            y = []
            
            for data_point in X:
                distance=KmeansClustering.euclidean_distance(data_point,self.centroids)
                # get the smallest distance of each point from each centroid
                cluster_num = np.argmin(distance)
                y.append(cluster_num)
                
                
            y = np.array(y)
            
            # readjust the centroid based on the cluster labels
            
            cluster_indices = []
            
            for i in range(self.k):
                cluster_indices.append(np.argwhere(y == i))
                
            cluster_centers = []
            
            for i, indices in enumerate(cluster_indices):
               if len(indices) == 0:
                    cluster_centers.append(self.centroids[i])
               else:
                   cluster_centers.append(np.mean(X[indices],axis=0)[0])
            
            if np.max(self.centroids - np.array(cluster_centers)) < 0.0001:
                break
            else:
                self.centroids = np.array(cluster_centers)
                
        return y
 
# use sklearn to get data

from sklearn.datasets import make_blobs 
from sklearn.metrics import adjusted_rand_score
data = make_blobs(n_samples=100,n_features=2, centers=3)
random_points=data[0]
 
# random_points = np.random.randint(0,100,(100,2))

kmeans = KmeansClustering(k=3)
labels = kmeans.fit(random_points)

print(data[1])
print(labels)

ari = adjusted_rand_score(data[1],labels)
print(ari)

plt.scatter(random_points[:,0], random_points[:,1], c=labels)
plt.scatter(kmeans.centroids[:,0], kmeans.centroids[:,1], c=range(len(kmeans.centroids)),
            marker='*', s=200)
plt.show()