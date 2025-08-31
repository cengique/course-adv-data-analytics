// A failed attempt to upload static contents as code assignment submission to Gradescope

const data = 'print("hello")';
var blob = new Blob([data], {
  type: 'application/octet-stream' //text/plain;charset=utf-8
});
//blob.size = data.length;
blob.upload = { bytesSent: 0, progress: 0, total: blob.size };
blob.accepted = true;
blob.name = 'travel_time.py';
//blob.type = "application/octet-stream";
console.log(blob);
const file=blob;

// From ChatGPT (not working)
//const file = new File([data], "travel_time.py", { type: "text/x-python" });

// TODO: last avenue: can we try GET method and pass everything on the URL? ChatGPT says it won't work, tested and it doesn't

// Create a FormData
const formData = new FormData();
formData.append('utf8', '✓');
// auth token is critical, must get from previous call to Gradescope even just login page)
formData.append('authenticity_token', '<INSERT TOKEN HERE>');
formData.append('submission[method]', 'upload');
formData.append('submission[owner_id]', '');
formData.append('submission[leaderboard_name]', '');
formData.append('submission[files][]', file, 'travel_time.py');
console.log(formData);

    try {
      // https://cors-anywhere.herokuapp.com/
      // `https://api.allorigins.win/get?url=${encodeURIComponent('https://www.gradescope.com/courses/1106756/assignments/6617143/submissions/')}`
      // `https://cors-anywhere.herokuapp.com/https://www.gradescope.com/courses/1106756/assignments/6617143/submissions/`
      const response = await fetch(`https://www.gradescope.com/courses/1106756/assignments/6617143/submissions/`, { // Replace with your server endpoint
        method: 'POST',
        headers: {
          // need fresh cookie here
            "Cookie": "<INSERT COOKIE HERE>",
            'Origin': 'https://www.gradescope.com',
            'Referer': 'https://www.gradescope.com/courses/1106756/assignments/6617143/submissions'
          },
        body: formData,
        });

      if (response.ok) {
        
        const result = await response; // .json() or response.text() if not JSON
        console.log(result)
        console.log('File uploaded successfully:', result);
        } else {
            console.error('File upload failed:', response.statusText);
        }
    } catch (error) {
        console.error('Error during file upload:', error);
    }
