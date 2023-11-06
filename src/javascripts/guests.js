let guests = []
export function addGuest(e) {
    e.preventDefault()

    // curly braces creats an obeject
    let guest = {
        // getElementById works the same as querySelector. 
        fname: document.getElementById("fn").value,
        lname: document.querySelector("#ln").value
    }

    // trim will remove any leading & trailing whitespaces from the user input
    if (guest.fname.trim() && guest.lname.trim()) {
        // add the guest to the guests[] array
        guests.push(guest)
        // This will convert the data into a string and store the information into the browser
        // Note: localStorage can only hold strings
        localStorage.setItem('guests', JSON.stringify(guests))

        // convert the data into html 
        let guest_html = `
            <td>${guest.fname}</td>
            <td>${guest.lname}</td>
        `
        // create a tr element
        let tr = document.createElement(`tr`)
        // assign guest_html as the value to the newly created tr element
        tr.innerHTML = guest_html

        // add the element to the table body within the html file
        document.querySelector("#guests tbody").appendChild(tr)
    } else {
        alert("Either first name or last name is blank.")
    }

    // clear the query fields on the form 
    this.reset()

}

export function loadGuests() {
    if (localStorage.getItem('guests')) {
        // parse converts into a JS object
        guests = JSON.parse(localStorage.getItem('guests'))

        for (let guest of guests) {
            let guest_html = `
            <td>${guest.fname}</td>
            <td>${guest.lname}</td>
        `
            // create a tr element
            let tr = document.createElement(`tr`)
            // assign guest_html as the value to the newly created tr element
            tr.innerHTML = guest_html

            // add the element to the table body within the html file
            document.querySelector("#guests tbody").appendChild(tr)
        }
    }



}