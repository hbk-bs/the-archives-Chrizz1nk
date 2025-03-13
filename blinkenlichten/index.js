document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("fileInput");
    const uploadButton = document.getElementById("uploadButton");
    const imagePreview = document.getElementById("imagePreview");

    uploadButton.addEventListener("click", () => {
        const file = fileInput.files[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = document.createElement("img");
                img.src = e.target.result;
                img.style.maxWidth = "100%";
                img.style.border = "2px solid #4e2323";
                img.style.borderRadius = "5px";
                img.style.marginTop = "10px";
                imagePreview.appendChild(img);
            };
            reader.readAsDataURL(file);
        } else {
            alert("Bitte wähle eine gültige Bilddatei aus!");
        }
    });
});
