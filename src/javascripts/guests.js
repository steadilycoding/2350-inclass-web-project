let guests = []
export function addGuest(e) {
    e.preventDefault()

    // curly braces creats an obeject
    let guest = {
        // getElementById works the same as querySelector. 
        fname: document.getElementById("fn").value,
        lname: document.querySelector("#ln"). value 
    } 

    // trim will remove any leading & trailing whitespaces from the user input
    if(guest.fname.trim() && guest.lname.trim()) {
        // add the guest to the guests[] array
        guests.push(guest)
    
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
    }

    // clear the query fields on the form 
    this.reset() 

}