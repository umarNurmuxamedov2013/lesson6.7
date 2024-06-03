async function fetchComments() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const comments = await response.json();
      displayComments(comments.slice(0, 20));

    } catch (error) {
    //   console.log("fetch error :", error);
      throw error;
    }
  }
  
  function displayComments(comments) {
    // console.log(comments);
    comments.forEach(comment => {
    //   console.log("fjs");
    let create = document.querySelector("div")
    let a = `(ID : ${comment.id}) `;
    create.append(a)
    // console.log(`ID : ${comment.id}.`);
    });
  }
  
  fetchComments().then(displayComments).catch(error => console.error(error));
  