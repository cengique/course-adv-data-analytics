# Assignment 4: SQL practice (due midnight Wed Sep 11) 

So far we worked with text and CSV files, but sometimes you need more powerful tools. We will practice with SQL (use [W3Schools](https://www.w3schools.com/sql/) or [SQLzoo](https://sqlzoo.net/)) databases to understand trade offs.

# Questions

1. [3 pts] Do this EITHER on SQLzoo or W3Schools. 
    - On [SQLzoo](https://sqlzoo.net/), complete  all of the exercises in the first five sections (including "#5 SUM and COUNT"). Show me in class that you completed the progress bar or post a screenshot that verifies your identity. Make sure to open an account so that it retains your progress, otherwise it may get deleted when you accidentally refresh. 
    - On [W3Schools](https://www.w3schools.com/sql/), do all the [52 exercises](https://www.w3schools.com/sql/exercise.asp?filename=exercise_select1). Again, log in to retain your progress and submit a screenshot.
    - **Extra credit:** complete 3 sections from  https://datalemur.com/ SQL interview practice site.
1. [2 pts] Go to [Altervista](https://en.altervista.org/) and log in with username `datagunay` and password `dataGGCSpring2019`.  In the dashboard, follow class instructions to open the PhpMyAdmin  console. This will give you access to the admin console of a MySQL  database. Select the `my_datagunay`  database on the sidebar, and then go to the Import tab to upload your  CSV file. This will create a new table for yourself. Rename the table to   indicate your name and topic (select table and go to Operations tab). If your data is too big to upload, let me know.  
1. [3 pts] Create three different queries to pull the relevant columns of your data with   certain restrictions on values in those or other columns. Use one [SQL SELECT](https://www.w3schools.com/sql/sql_select.asp) statement with a [WHERE clause](https://sqlzoo.net/wiki/SELECT_basics) to list conditions. Also run a [GROUP BY](https://sqlzoo.net/wiki/SUM_and_COUNT) and aggregate the values for a column. Third, create a SELECT in SELECT statement to query your data. In your reply, use the code blocks to show your  queries and top few rows of their results. Explain what you aimed to achieve and discuss about what you  learned from them.  Also write and explain additional SQL commands that you need to use to clean/scrub your data. Examples:
    ```SQL
    SELECT * FROM `Gunay-gas` where `where/what` like "%shell%"
    and `$/gallon` > 3 order by `$/gallon` desc
    # with group by
    SELECT `where/what`, SUM(gallons) FROM `Gunay-gas` GROUP BY `where/what`
    ```
3. [2 pts] Discuss   about your experience with scrubbing and extracting information from   your dataset by comparing the command line tools you practiced earlier, the R language, and with the power of SQL. Briefly indicate trade-offs and advantages in a couple of phrases.

Note to self: make datalemur mandatory
