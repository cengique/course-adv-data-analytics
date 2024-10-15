# Assignment 9: CREATE abstract and Python reading and notebook (due midnight Wed Oct 17)

# Submit CREATE Abstract:

An  important part of data science and analytics is communicating your results to various audiences. To improve your skills, you will have the opportunity to present the results of your analysis as a graded **poster presentation**.  You will organize your results on a large-scale wall poster (max 48"x36") and stand in front of it to explain your work to  people who are interested.

We aim to do an **in-person** presentation at the CREATE event at **2-3pm on** **Thursday November 14th** (for those of you who have a valid excuse, the online spot is Fri, Nov 15th 10am or 2pm). You are required to be **present for 30 minutes** during this event. If you have a schedule conflict that you can't resolve, do let me know ASAP.

You  have already published analysis results on your dataset, so it's time to refine and make a good presentation. Follow the examples and guidelines below, and then post your title and abstract here.

# Answer Questions

1. Read PDA chapters 5-10. There will be a quiz.
1. Create a new Jupyter notebook for your project based on the dataset you selected earlier. In the notebook, have the following:
   1. A   good, descriptive or interesting title, that drives a take-home  message  you can convey based on your previous results on your dataset
   2. Start with a text paragraph that briefly explains your motivation and dataset. You can use the abstract you created earlier.
   3. Outline the steps you would like to take to analyze your data in this notebook. You don't have to repeat the steps that you already accomplished in other platforms and you can simply build on top of them.
2. Create an account on [Colab](https://colab.research.google.com/notebooks/intro.ipynb), [Deepnote](https://deepnote.com/), or [Azure](https://visualstudio.microsoft.com/vs/features/notebooks-at-microsoft/).  Upload the notebook file you created in Q1 to this service. You will add more to your notebook, which you can test locally first, or implement directly on the cloud. Make your notebook readable by all and share it via a link, and post below. Your notebook should contain the following new elements, with short explanations and commentary at each step:
   1. Load your dataset into your notebook. In Colab, you'll need to upload your file to your notebook using [these instructions](https://colab.research.google.com/notebooks/io.ipynb). Then, you can load your CSV file into a [Dataframe](https://pandas.pydata.org/docs/getting_started/intro_tutorials/02_read_write.html) object using [pandas](https://pandas.pydata.org/): 
      ```python
      import pandas as pd
      
      df = pd.read_csv("mycsvfile.csv")
      ```
   1. Scrub/munge your data using _Pythonic_ expressions and [pandas workflows](https://pandas.pydata.org/docs/getting_started/intro_tutorials/03_subset_data.html). Make sure to introduce your dataset and explain its attributes after showing them in the output of notebook blocks. Briefly explain your munging steps.
   1. Recreate 2 plots from your R Markdown report, or make new ones.
   1. Run statistical tests to improve upon what you did with R. You can dig deeper into your hypothesis, or test new ones.
   1. Implement k-means clustering but choose a different similarity metric - justify why (instead of stats?)

# CREATE Abstract Content guidelines:

**Title:**  This should be a brief description of your dataset and aim. Example:  "Investigating X dataset for finding a relation between Y and Z". Try to  be creative and different from others. If you don't have a specific  aim, you can be vague and exploratory.

**Summary:**  Must be between 100-250 words. Briefly explain the data and the question(s) you are considering, the results of your data exploration,  and plans on how to deeper analyze your data to answer specific  questions. Don't be specific about the tools and the results that you  don't have yet, as these things may change as you progress with your analysis. You can post early drafts here before the deadline and ask me to give you feedback if you are unsure how to write this.

Here are some advised steps on how to form your summary:

1. Give some background information about the domain and raise interest
2. Identify a question/problem
3. Explain how the problem may be solved with data
4. Describe the details of your dataset
5. Propose what kind of methods/tools you may use to attack this problem and what you hope to find (don't make promises!)
6. Finish with a overall summary statement

# Examples:

**Title:** What factors of school benefits students to have a higher test score?  
**Summary:**  The score a student can get on their test checks everything that the  student had learned in class. It can determine if they were able to at  least gather some knowledge about the class. However, there are many  different factors that affect students even if it is part of their  lifestyle. That's why I will be using a dataset with that recorded  students from different schools. The recorded data will contain both  their pretest and posttest scores while also having information about  the school and students like school type or free/subsidized lunch. I  will be testing how each of these factors affects a student's grades.  For example, one way the scores can be tested could be by the school  setting a student goes to or by the number of people are in the  student's class. These are the types of questions I will be testing to  see if they benefited the student's scores. In the end, I hope to be  able to find which factor or factors positively affects a student's test  scores.

**Title:** An Analytical Exploration in Gun Violence in the USA  
**Summary:**  It seems that gun violence is becoming more prevalent in the news now  more than ever. There have been many tragedies in the US related to gun  violence. There is a dataset on gun violence data from 2013 to mid 2018.  It has a lot of information on a crime incident involving firearms. The  information that is attached to each incident includes names, weapons  used, number of victims injured, number of victims killed, and even  local legislature information. I hope to explore into the data to find  trends and other significant information. An initial analysis of the  data will bring up useful information like the most used weapon, most  violent places in the US, most violent date. With a deeper exploration  of the dataset we can find useful information that we can hopefully use  to combat lowering gun violence in America.

**Title:** Investigating CDC Coronavirus Deaths Data Set to compare the Correlation Between Coronavirus Deaths and Age with Influenza Deaths and Age  
**Summary:** 675,000 is how many people are estimated to have died in the United States from the 1918 Flu Pandemic (CDC Estimate). That number was a little under 1% of the population of the United States in 1917. Today, October Tenth, 2020, there are 208,000 people dead in the United States from the COVID virus (CDC Estimate). This number is a little under .1% of the population of the United States in 2020.

Given how long the Coronavirus pandemic has gone on and the extended measures we have taken to protect ourselves against the virus, the two viruses, while seemingly different in impact, are similar in some ways. One of these is how they differ in strength based on the age of their host.

I am using a data set from the CDC depicting all COVID, Influenza, and Pneumonia deaths from the beginning of the year until mid-August to determine if there is a positive statistical correlation between each affliction and age. I want to determine how closely related these three afflictions are. If they are closely related, I plan to create a model using their well documented spreading patterns to predict the future spread of deaths from COVID.

**Title:** Gas price analysis in the Atlanta region  
**Summary:**  Gas prices are notoriously volatile and many people want to find the cheapest price. The prices may fluctuate based on location, brand, and  date parameters. What are some best locations and worst locations to  purchase gas? To address these questions, we looked at a dataset of gas  prices from the Metro Atlanta region collected over the last three  years. We aim to analyze the data, which is stored in CSV format, using  logistic regression to find correlations between parameters. We also aim  to indicate high and low extremes in terms of location and dates. Our  preliminary analysis showed that the best place to purchase gasoline  near the GGC area is gas station X. In summary, this analysis may serve  to have a deeper understanding of how gas prices fluctuate in Metro  Atlanta region to help commuters make the best decision in refueling  their vehicles.
