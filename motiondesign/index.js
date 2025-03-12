const style = document.createElement("style");
style.textContent = `
    /* Allgemeines Styling */
    body {
        font-family: "Arial", sans-serif;
        background-color: #ffefa8;
        color: #333;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    /* Header */
    header {
        background-color: #4e2323;
        color: rgb(255, 255, 255);
        width: 100%;
        text-align: center;
        padding: 20px 0;
    }

    p {
        font-family: "Arial", sans-serif;
        background: rgba(68, 17, 17, 0.733);
        padding: 10px 20px;
        border-radius: 5px;
        transition: 0.3s;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 25px;
    }

    /* Container */
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        padding: 20px;
        max-width: 800px;
        width: 100%;
    }

    /* Navigation */
    .archive-list {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
    }

    .archive-list li {
        background: rgb(92, 18, 18);
        padding: 10px 20px;
        border-radius: 5px;
        transition: 0.3s;
    }

    .archive-list li:hover {
        background: #ffffff;
    }

    .archive-list a {
        text-decoration: none;
        color: #ffffff;
        font-size: 18px;
    }

    /* Responsivität */
    @media (max-width: 768px) {
        .container {
            padding: 10px;
        }

        .archive-image {
            max-width: 100%;
        }
    }
`;
document.head.appendChild(style);
