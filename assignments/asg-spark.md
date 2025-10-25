# Assignment 10: Spark practice (due midnight Wed Oct 25) 

## Accessing the servers:

* Start the Cisco VPN app, connect to `vpn.ggc.edu` (see Assignment 2 for details). Select the ITECLAB network and log in with your GGC id and password.
* Connection info for **Server#1** (no need for VPN):
    - IP: `149.165.152.183`
    - username: `analytics4220`
    - password: `Fall2021Gunay`
    - run Spark with: `/usr/local/spark/bin/pyspark`
* Connection info for **Server#2**  (first requires connection to the ITECLAB VPN via instructions in slides):
    - IP: `172.20.1.39`
    - username: `analytics4220`
    - password: `Fall2021Gunay`
    - run Spark with: `docker exec -it gunayspark bin/pyspark`
* On 	Windows, download [Putty](https://www.putty.org/). Enter the host information in the IP address field. On a Mac/Linux, open the terminal and do: `ssh username@host` to your VM in the ITEC lab.
* Once you are connected, follow the instructions on the lecture slides to start `pyspark`.

## Preparation

You can run either on our ITECLAB host above or on your local Spark installation (follow instructions on D2L under Resources>Big data>Spark Setup). If you are running on the ITECLAB machine, do the following:

1. Your data files should already be on the VM, in your folder. If not, go back to the command line assignment and do the `scp` step. 
1. If using Server#2, you will still need to copy the data file _into_ the Docker image so it can be used with Spark:

    ```
    docker cp  yourfile.csv gunayspark:/opt/bitnami/spark/data/
    ```
    If using Server#1, you need to `cd` into the correct folder that contains your data file before running Spark.

2. Follow the slides to start `pyspark` and type your code in, or save it in a Python script file and run it with the `spark-submit` command. Post your code here and explain what you aimed to achieve.

## Questions

1. **Write a Spark program** that operates on your data to calculate an aggregate computation. See lecture slides and the section below for example code that loads your CSV file as a [DataFrame object](https://spark.apache.org/docs/3.0.0/sql-getting-started.html#creating-dataframes). You must use at least 3 of their [available operations](https://spark.apache.org/docs/3.0.0/api/python/pyspark.sql.html#pyspark.sql.DataFrame). Each time, show the top lines from your output as a post here and explain its significance based on the command you issued. For instance, you can do statistical calculations, summarization, join, or grouping operations.
1. Create a SQL table from your dataframe inside Spark and run a SQL query on it that includes a WHERE, GROUP BY, and ORDER BY clauses.

## Spark Example for Reading and Working with CSV Files
(after copying your file as explained in above instructions)

    # load CSV file as DataFrame object in Spark 
    # (read the first row as column headers)
    df = spark.read.csv("data/athlete_events.csv", inferSchema = True, header = True)
    # show info
    df.printSchema()
    df.show()
    # run queries
    males = df.filter(df.Sex == "M")
    malesYears = males.filter(males.Year > 1996).filter(males.Year < 2006)
    malesYears.show()

1. **Optional challenge for extra credit:** Run `pyspark` on server#1, and load the file `/bigdata/largefile`. Search for instances of the word "Hidden" and report the count. As a second challenge, collect the numbers affixed to the word and return their sum. _Hint_: You can use a `filter`, `map`, and `reduce` sequence. It may help to check the data formatting first.
