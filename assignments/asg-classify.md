# Apply Classification to your Dataset

Start by selecting a column that you want to use as the label. It can be a categorical item, or even a numerical column that indicates an outcome. Then, find other attributes you can use to predict the label column. Categorical attributes must be converted to numerical values to be used. Normalize all the numerical values to the same range by either dividing by their max value or calculating a z-score.

Next, divide your rows into training (~70%) and testing sets (~30%). Use items from your testing set to test the accuracy of the classifier. Follow instructions in class to implement the k-NN algorithm with these columns.

To report the success of your implementation, iterate through all the rows in your testing set and check if it gives the correct class. Report the confusion matrix first and then calculate, *accuracy*, false negative rate, false positive rate, *precision*, and *recall* metrics.

