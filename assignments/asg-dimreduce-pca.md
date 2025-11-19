## Using dimensionality reduction with PCA for analyzing your dataset

PCA can find a reduced subset of your dataset that can contain approximately the same information. It can be thought as finding the *essential* features in your data. Think about **what part** of your data can benefit from reducing to its essentials. 

Select 2 or more **numeric columns** from your dataset. You can convert a categorical column by quantifying it into values (for example by converting \[bad, neutral, good\] to \[-1, 0, +1\]) by using `Series.replace()` or `Series.cat.codes` in Pandas:

```python
df['LevelNumeric'] = df['Level'].astype('category').cat.codes
```

Make a new section in your old notebook and post a link/file. Follow [my notebook](https://colab.research.google.com/drive/19sBTXm47lLuo0G4zpUXp2tomxYfUtxo1?usp=sharing)

### Questions:

1. Find the **covariance matrix** of your numeric dataframe. First center and normalize your dataframe by its column standard deviation. Then use matrix multiplication to calculate cov as explained in [my slide](https://cengique.github.io/course-adv-data-analytics/module-dimreduce.html#/5/3) (and on page 8 of the textbook slides or page 189 of [Chapter 7](https://dataminingbook.info/book_html/chap7/book.html)). The centered and normalized matrix should be transposed and matrix multiplied with its original form, which should result in a square matrix as wide as the number of your original columns. Divide by number of rows minus one. Compare your calculated covariance matrix to one you can obtain with [numpy.cov](https://numpy.org/doc/stable/reference/generated/numpy.cov.html) (transpose your original numeric data before passing) and discuss whether you got it right in your notebook. 
2. Calculate all the **principal components** of your dataset by finding the eigenvalues and eigenvectors of your covariance matrix by using [numpy.linalg.eig](https://numpy.org/doc/stable/reference/generated/numpy.linalg.eig.html). The eigenvector with the largest eigenvalue would be your first principal component. Compare your calculated component to the one you can get from the [PCA module in sklearn](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.PCA.html). Add text blocks or comments to explain your code and create bar plots of the resulting components and their `explained_variance` amounts. Was PCA able to reduce your dimensions? Discuss briefly in your notebook. Show a bar plot of the loadings from your top principal components and discuss whether you see any linear relations that are meaningful.
3. Use the `transform()` method in the `sklearn` PCA module to transform your numeric dataset onto the PC bases and create matrix of scatter plots comparing the original vs transformed datasets using [scatter_matrix](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.plotting.scatter_matrix.html#pandas.plotting.scatter_matrix). Explain if you see an improvement of representing your data.
