# Assignment 8: Interactive Javascript visualization (due midnight Wed Oct 9)

# Questions:

1. Based on the D3.js Tutorial 1 content we completed in class, create
   your own visualization. Instead of creating a local file, fork my
   [JSFiddle](https://jsfiddle.net/cengique/sj4e0qzL/) page from the
   top menu, then publish and share your link. You do NOT need to
   include the `<html>` and `<body>` tags in the HTML window and you
   can put Javascript directly in the Javascript window as in my
   example. Include the following elements in your visualization:
    - Circles, rectangles, and text
    - Use transitions to change color, text, and position
    - Extra credit: Any other elements from the [D3.js 3.x
      API](https://github.com/d3/d3-3.x-api-reference/blob/master/API-Reference.md). Highlight
      in the text that you did this so I can give you points.
1. Based on the Tutorial 2 content, load your CSV dataset into
   Javascript and use D3.js to visualize one or more columns. View and
   **fork** [my Code
   Sandbox](https://codesandbox.io/p/sandbox/ksdf9k). The fork button
   is on the top right and it will ask you to create a free
   account. In your fork, start by editing my example in the
   `index.html` file. Upload your data file and include the following
   elements in your visualization:
    - For one column from your dataset, create circles, rectangles, or
      text elements.
    - Create a second set of elements from another column, but
      position them close to the first one, or change one of its
      attributes with it (for instance, position or color).
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
