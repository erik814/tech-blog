const postCreator = async (event) => {
    event.preventDefault();
    console.log('clicked')
    
    const user_id = document.getElementById("user_id").dataset.userid;
    const title = document.querySelector('#title').value
    const content = document.querySelector('#content').value
    
    if (title && content) {
        const response = await fetch('/api/post/', {
            method: 'POST',
            body: JSON.stringify({ title: title, content: content, user_id: user_id }),
            headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('An error occurred while creating the post');
        };
    }
};
    
    document.querySelector('.postForm').addEventListener('submit', postCreator);