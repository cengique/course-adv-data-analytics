# Assignment 5: JSON and Web APIs (due midnight Wed Sep 18)

## Questions

### First use an existing Web API
    1. Select one or more online APIs (see [slides](https://cengique.github.io/course-adv-data-analytics/module5-sql-nosql.html#/4)) and show usage examples from 3 different endpoints. For each one, show the URL with query parameters, explain its intention, and show a summary of its output in your browser. Note that you may need to [URL encode your query](https://www.urlencoder.org/) when you insert it into the URL.
    
### Start a Github repository for your project
    1. Create [Github](https://github.com) repository for your project. Don't just name it for this assignment! Think of a name that would make sense for your whole project and look good when you put it on your resume or share publicly. Upload your CSV file(s) and start a README file. Use the [Github Flavored Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) to format it. Use the content you posted in Assignment 1 and expand on it to briefly explain your project and dataset.
    1. Use [Github Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) to host it on the web. Since you already have a repo, you can skip the creation step in the instructions. Under Settings>Pages, select `main` for the branch and `/` as the folder. Upload your R Markdown HTML and associated files. Test your new web site in your browser. Make a link to your HTML file from your README file (_Hint_: make a proper Markdown link).

### Create and query your own API
    1. [Convert your CSV dataset into JSON](https://csvjson.com/csv2json). If needed, [clean the JSON](https://jsonlint.com/). 
    1. Upload your JSON to Github and host it on Github Pages.
    1. Use `curl` and `jq` to [download and query](https://jqlang.github.io/jq/tutorial/) your dataset. Run 3 separate queries. For each, show the command, explain its intention, and show a summary of its output.

*Note:* If you don't have access to the `curl` and `jq` commands, install them on your computer or use my remote server below.

## Remote server

Connection info for Server#1 (no need for VPN):

- IP: 149.165.170.200
- username: analytics4220
- password: Fall2021Gunay

Use SSH to connect, e.g.:

```bash
$ ssh analytics4220@149.165.170.200
```
