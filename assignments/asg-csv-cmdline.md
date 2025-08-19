# Assignment 2: Manipulate your CSV dataset and import into R (midnight Mon Aug 26) 

# Reddit instructions

- Post your answers below in a **single reply** so we can see your results. 
- You can start by answering one of the questions and edit/reply to it later to add more. 
- Use the **formatting** options in Reddit, especially the "code block" to make your answers more readable. 
- **Screenshots:** Note that you can't paste images in your replies on Reddit, but you can give links to image files you uploaded elsewhere ([imgur](https://imgur.com/), OneDrive, Google Drive, etc). 
- **Upvote** answers of others that you find interesting by pressing the up arrow button. 
- **Reply to others** and give feedback for extra credit.

# Assignment 

This assignment is intended to practice command line and get started with R. Follow the steps:

1. Start by downloading the CSV file of your dataset.
1. Open a command line on your computer: Command Prompt or PowerShell on Windows and Terminal on Mac (On Windows, it may be better to download Git to have Git Bash, which is more compatible with Linux shells that we will use later in class).
1. Post the commands you typed on your computer and the outputs you received from them in multiple code blocks in your response. Do all of the following using the command line (see D2L Resources section and [slides](https://cengique.github.io/course-adv-data-analytics/module3-data-scrub.html#/4)):
    1. In your command line prompt, show which location you are on your computer (use the `pwd` command)
    1. Create a new folder on your computer for your project work (use the `mkdir` command). Show the output of the `ls` command to confirm it.
    1. Copy your CSV file from the downloads location into your new folder (use `cp`). 
    1. Change into folder, show your new folder, and then show the first few lines of your CSV file (use `head`). Also show `ls` and `pwd` outputs. Attach a screenshot.
    1. Save the first 1,000 lines of your CSV file into a new CSV file (use your `head`).
    1. Filter your CSV file based on a keyword to create a new CSV file (use `grep`). Show the top of your file and briefly explain the output.
    1. Filter your CSV file based on a regular expression to create a new CSV file (use `grep` and `sed -Ee 's/search regexp/replace regexp/g' < file`). It must use a feature of RegExp that you could not do with simple keywork filtering. Also show the top of your file and explain what you achieved.
1. Install latest versions of [R](https://cran.rstudio.com/), and only after that, [Rstudio Desktop](https://rstudio.com/products/rstudio/download/) on your computer.
1. Load one of your resulting CSV data files into R [read.csv](https://www.rdocumentation.org/packages/utils/versions/3.6.2/topics/read.table). Make sure you are in the correct folder using `getwd()` and if not change it with `setwd()`. Show the R commands you used to load your data. Use the `head()` function in R to display the first few lines from your dataset to give us an idea of how your data looks like. 

# Quiz prep

1. Study **command line** using the [Linux Journey tutorial](https://linuxjourney.com/lesson/the-shell#) and our [slides](https://cengique.github.io/course-adv-data-analytics/module3-data-scrub.html#/4).
1. Study **basic RegEx syntax** and functionality from D2L Resources section tools.
2. **Read your assigned chapters** on [our schedule](https://cengique.github.io/course-adv-data-analytics/schedule.html):  Ch 3 from [R in a Nutshell](https://www.oreilly.com/library/view/r-in-a/9781449358204/) "A Short R Tutorial" (PDF extract also available on D2L) and the R cheatsheet from our D2L>Resources>R section.
