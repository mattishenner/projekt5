tinymce.init({
    selector: '#case',
    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
    tinycomments_mode: 'embedded',
    tinycomments_author: 'Author name',
    mergetags_list: [
        { value: 'First.Name', title: 'First Name' },
        { value: 'Email', title: 'Email' },
    ]
});

const submitBtn = document.querySelector("#submit")
const cases = JSON.parse(localStorage.getItem("cases")) || []

let id;
if (cases.length) {
    id = cases[cases.length - 1].id + 1
} else {
    id = 1;
}

function submit() {
    const data = tinymce.activeEditor.getContent();
    const heading = document.querySelector("#heading").value
    const quote = document.querySelector("#quote").value
    const author = document.querySelector("#author").value
    const obj = {
        id,
        data,
        heading,
        quote,
        author,
    }
    id++
    cases.push(obj)
    localStorage.setItem("cases", JSON.stringify(cases))
}

submitBtn.addEventListener("click", submit)