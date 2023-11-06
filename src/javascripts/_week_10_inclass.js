import "bootstrap"
import {addGuest, loadGuests} from './guests'

document.querySelector("#guest-form").onsubmit = addGuest

// This will load the loadGuests function when the windows webpage is loaded
window.onload = loadGuests

// This will delete the the storage when the .delete-guests button is clicked by the user
document.querySelector('.delete-guests').onclick = function(){ localStorage.clear()}

