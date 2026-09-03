# Assignment 2: Manipulate your CSV dataset and import into R (due midnight Wed Aug 26)

## Instructions

- Post your answers below in a **single reply** so we can see your results. You may need to break into multiple because of Discord limit.
- You can start by answering one of the questions and edit/reply to it later to add more. 
- Use Markdown **formatting**, especially the "code block" (shift+Enter to add multiple lines) to make your answers more readable like this: 
\`\`\`
code
\`\`\` 
- **Screenshots:** you can paste images in your replies or you can give links to image files you uploaded elsewhere ([imgur](https://imgur.com/), OneDrive, Google Drive, etc). 
- **React** to answers of others that you find interesting by putting an emoji. 
- **Reply to others** and give feedback for extra credit.
- **Break post into multiple parts** if Discord doesn't let you submit large messages.

## Assignment 

This assignment is intended to practice command line and get started with R. Follow the steps:

1. Start by downloading the CSV file of your dataset.
1. Install latest versions of [R](https://cran.rstudio.com/), and only after that, [Rstudio Desktop](https://rstudio.com/products/rstudio/download/) on your computer.
1. Load one of your resulting CSV data files into R [read.csv](https://www.rdocumentation.org/packages/utils/versions/3.6.2/topics/read.table). Make sure you are in the correct folder using `getwd()` and if not change it with `setwd()`. Show the R commands you used to load your data. Use the `head()` function in R to display the first few lines from your dataset to give us an idea of how your data looks like. 
1. Apply (single or multiple) Linear Regression to a variable and outcome in your dataset. Explain what you are looking for and interpret the results. Optionally look for collinearities using the [`cor` function in R](https://www.datanovia.com/learn/biostatistics/correlation/correlation-test-in-r).
1. Apply Logistic Regression to a variable and outcome in your dataset. Explain what you are looking for and interpret the results.
