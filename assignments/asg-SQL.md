# Assignment 4: SQL practice (due midnight xxx) 

So far we worked with text and CSV files, but sometimes you need more powerful tools. We will practice with SQL databases to compare trade offs.

# Questions

1. [4 pts] Do this ONE of the following: 
    - On [DataLemur]( https://datalemur.com/) (**recommended**), EITHER complete the Basic and Intermediate SQL [tutorial sections](https://datalemur.com/sql-tutorial), OR complete 15 easy and 5 medium difficulty SQL questions from the [interview practice section](https://datalemur.com/questions?category=SQL). Submit a screenshot of your profile page showing your progress.
    - On [W3Schools](https://www.w3schools.com/sql/), do all the [52 exercises](https://www.w3schools.com/sql/exercise.asp?filename=exercise_select1). Sign up and log in to retain your progress and submit a screenshot showing your progress.
    - On [SQLzoo](https://sqlzoo.net/), complete  all of the exercises in the first five sections (including "#5 SUM and COUNT"). Show me in class that you completed the progress bar or post a screenshot that verifies your identity. Sign up and log in so that it retains your progress, otherwise it may get deleted when you accidentally refresh. 
1. [4 pts] Query your own dataset by doing ALL of the following:
    1. [1 pts] Open the [DuckDB shell](https://shell.duckdb.org/) and follow [this tutorial](https://towardsdev.com/sql-in-your-browser-duckdb-web-shell-for-purely-local-data-analytics-82b8876eb7f7) to upload your CSV file into it as a SQL table. Note that the shell will not save your work and will reset if you refresh your browser.
    1. [4 pts] Create three different queries to pull the relevant columns of your data with certain restrictions on values in those or other columns. Use one [SQL SELECT](https://www.w3schools.com/sql/sql_select.asp) statement with a [WHERE clause](https://www.w3schools.com/sql/sql_where.asp) to list conditions. Next, run a [GROUP BY](https://www.w3schools.com/sql/sql_groupby.asp) and aggregate the values for a column. Third, create a SELECT in SELECT statement to query your data. In your reply, use the code blocks to show your  queries and top few rows of their results. Explain what you aimed to achieve and discuss about what you  learned from them.  Also write and explain additional SQL commands that you need to use to clean/scrub your data. Examples:
    ```SQL
    SELECT * FROM `Gunay-gas` where `where/what` like "%shell%"
    and `$/gallon` > 3 order by `$/gallon` desc
    # with group by
    SELECT `where/what`, SUM(gallons) FROM `Gunay-gas` GROUP BY `where/what`
    ```
3. [1 pts] Discuss   about your experience with scrubbing and extracting information from   your dataset by comparing the command line tools you practiced earlier, the R language, and with the power of SQL. Briefly indicate trade-offs and advantages in a couple of phrases.
