# Assignment 9: Python reading and notebook (due midnight Wed Oct 15)

## Reading/review: Python

1. Review content from PDA textbook chapters 4-10 that you learned in ITEC 3160. If you need additional support follow this LinkedIn Learning video on [Python Data Analysis](https://www.linkedin.com/learning/python-data-analysis-2/get-started-in-data-analysis-with-python?u=76116202).

## Create a notebook with a preamble explaining your project

Create a new Jupyter notebook (or directly work on the cloud - see below) for your project based on the dataset you selected earlier. In the notebook, have the following in Markdown cells:

1. A   good, descriptive or interesting title, that drives a take-home  message  you can convey based on your previous results on your dataset
2. Start with a text paragraph that briefly explains your motivation and dataset. You can build on the introductory paragraph you authored earlier, but include some of the results you have found so far this semester.
3. Outline the steps you would like to take to further analyze your data in this notebook. You don't have to repeat the steps that you already accomplished in other platforms and you can simply build on top of them.

## Add Python code to your notebook

Your notebook should contain the following new elements, with short explanations and commentary at each step in accompanying Markdown cells:

1. Load your dataset into your notebook. In Colab, you'll need to upload your file to your notebook using [these instructions](https://colab.research.google.com/notebooks/io.ipynb). Then, you can load your CSV file into a [Dataframe](https://pandas.pydata.org/docs/getting_started/intro_tutorials/02_read_write.html) object using [pandas](https://pandas.pydata.org/): 
    ```python
    import pandas as pd
    
    df = pd.read_csv("mycsvfile.csv")
    ```
1. Scrub/munge your data using _Pythonic_ expressions and [pandas workflows](https://pandas.pydata.org/docs/getting_started/intro_tutorials/03_subset_data.html). Make sure to introduce your dataset and explain its attributes after showing them in the output of notebook blocks. Briefly explain your munging steps. You can reuse scrubbed data that you created earlier in the semester using command line and R.
1. Recreate 2 plots from your R Markdown report, or make new ones.
1. Run statistical tests to improve upon what you did with R. You can dig deeper into your hypotheses, or test new ones.
1. Identify one or more numerical columns from your dataset, where you can formulate a hypothesis that can be tested with clustering. Implement a basic k-means clustering algorithm from scracth and apply to your dataset. Visualize the steps and the results of the algorithm. 
1. Discuss whether the clustering results align with or contradict your hypothesis. Discuss whether k-means is an appropriate method for your specific question. Discuss how it could be improved in your case.

## Post your notebook on the cloud

Do the following:

1. Create an account on the _beta_ site [Analysim](http://dev.analysim.tech/). Analysim is a project-oriented science and data analysis sharing platform where you can create projects and associate multiple notebooks with it as a portfolio. 
1. In your **Dashboard**, create a new "project" on the site for your semester project. Make sure it's public. You can add optional tags and a brief description, but the main description will be as a notebook file below.
1. Under the **Datasets** tab, upload your CSV file by clicking on the up arrow icon. It should show up and if you click on it, a CSV browser should pop up. You can even quickly filter and visualize your file here.
1. Under the **Notebooks** tab, you will see a default "readme.ipynb" file. First, click on the database icon that looks like stacked discs and checkmark the CSV file you uploaded (it will not show up if you did not upload under Datasets). Then click on the readme.ipynb to open the editor.
1. Paste your title and description paragraphs you created earlier into this notebook. Add enough commands to load your CSV dataset and show some basic information. This notebook will show up when people click on your project. So don't make it too long, but descriptive and interesting enough so people want to see more in your project.
1. After you change the readme.ipynb file, you MUST click on the **save** button (or press Ctrl-S) and then click on the blue **"commit changes"** button on the top right. This will create a new version of your notebook and close it. 
1. Back in the **Notebooks** tab, this time click on the + icon to **upload** the notebook file you created in the above steps. You will add more to your notebook later, which you can test locally first, or implement directly on the cloud. 
1. The URL to your notebook is a sharable link that should be readable by all. Post this link here to complete the assignment. 
1. Extra credit: Create a step-by-step tutorial with screenshots that follow the above steps for future students. It does not have to be posted on Analysim.

_Note:_ If you have technical difficulties with the above steps and you are out of options, you can instead post your notebook on one of the following: [Colab](https://colab.research.google.com/notebooks/intro.ipynb), [Deepnote](https://deepnote.com/), or [Azure](https://visualstudio.microsoft.com/vs/features/notebooks-at-microsoft/).  
