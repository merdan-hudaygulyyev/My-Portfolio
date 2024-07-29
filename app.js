let tablinks = document.getElementsByClassName('tab-links')
let tabcontents = document.getElementsByClassName('tab-contents')

openTab()
function openTab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove('active-link')
    }
    for(tablink of tabcontents) {
        tablink.classList.remove('active-tab')
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add('active-tab')
}
