# Assignment 8: Interactive Javascript visualization (due midnight Wed Oct 7)

# Questions:

1. Based on the D3.js tutorial we followed in class, create your own
   visualization with few basic shapes. Instead of creating a local
   HTML file, **fork** my
   [CodePen](https://codepen.io/cengique/pen/OPMRjVo) page from the
   right side of the bottom menu. You do NOT need to include the
   `<html>` and `<body>` tags in the HTML window and you can put
   Javascript directly in the Javascript window as in my example. To
   submit, **save** and **share** your link from the bottom
   menu. Include the following elements in your visualization:
    - Circles, rectangles, and text
    - Use transitions to change color, text, and position
    - Extra credit: Any other elements from the [D3.js 7.x
      API](https://d3js.org/d3-shape). Highlight
      in the text that you did this so I can give you points.
1. Make a new visualization by loading your CSV or JSON dataset from
   your Github Pages link with D3.js to visualize one or more
   columns. View and **fork** [my
   CodePen](https://codepen.io/cengique/pen/OPMRjba). In your fork,
   start by editing my example in the Javascript box. Include the
   following elements in your visualization:
    - For one column from your dataset, create circles, rectangles, or
      text elements.
    - Create a second set of elements from another column, but
      position them close to the first one, or change one of its
      attributes with it (for instance, position or color).
    - Once your visualization is working, export and then upload your
      files into a new folder on your Github repository and link their
      Github Pages URL from your README.
2. We will switch to a more complete JavaScript visualization
   publication platform,
   [ObservableHQ](https://observablehq.com/). Here, we will create
   interactive visualizations of data retrieved from public APIs using
   Javascript libraries as shown in the class lecture. Open an account
   on ObservableHQ, and **fork** [my example
   notebook](https://observablehq.com/@cengique/api-data-example). It is using  the [MusicBrainz search
   API](https://musicbrainz.org/doc/Development/XML_Web_Service/Version_2/Search#Artist)
   to retrieve music band information that has a keyword (e.g.,
   "madonna") in them and the graph plots the names of the musicians
   and their scores as bars. In this warmup question, only change the API call
   to query with a different keyword (or use another API query option)
   and display the results in a graph. Make your fork **public**, and
   **post the Share link** here.
3. Now that you are familiar with ObservableHQ, do **ONE** of the following:
   1. Use a different API from [this
      list](https://github.com/toddmotto/public-apis) or [this
      list](https://explore.postman.com/) and display the data in one
      of the ways in above question, or graph it any other way. You
      can use the API that you selected in the earlier
      assignments. You can create a new notebook from a template on ObservableHQ, or simply save your
      previous one under a different name. Prefer an API that requires no
      authentication, otherwise you need additional code (which is not bad).
   2. Try Observable visualizations other than bar charts and with
      your project dataset. Follow [these
      examples](https://observablehq.com/@observablehq/introduction-to-data)
      to see how you can import data into your notebooks (e.g. your
      CSV file). Choose among several [D3.js visualization
      templates](https://observablehq.com/@d3/gallery) to fork and
      modify. Check out [their
      tutorials](https://observablehq.com/tutorials) also.
