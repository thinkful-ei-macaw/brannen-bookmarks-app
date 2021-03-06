import $ from 'jquery';
import api from './api';
import store from './store';

function generateBookmarkElement() {
    //this function will generate the bookmark element for individual bookmarks
}

function generateBookmarksString(bookmarklist){
    const bookmarks = bookmarklist.map((bookmark) => generateBookmarkElement(bookmark));
    return bookmarks.join('');
}

function render() {
    //renderError
    //this function will check if a filter has been applied for rating then place the generated bookmarks string in the index.html
}

function handleNewBookmarkSubmit() {
    //this function will look for a submit on the new bookmark button, prevent default, and then render the create new bookmark page
}

function generateCreateBookmarkPage() {
    //this function will return the html necessary for the submission of a new bookmark into the store
}

function handleCreatedBookmarkSubmit() {
    // this function will listen for a submission on the create bookmark page and submit the inputs provided into the factory function for bookmark objects and send that to the server store and current store
}

function getBookmarkIdFromElement(bookmark) {
    //this function will return the id from the bookmark that gets clicked
    return $(bookmark).closest('.js-bookmark-element').data('item-id');
}

function generateError() {}
function renderError() {}
function handleCloseError() {}

function handleDeleteBookmarkClicked() {
    //this function will listen for a delete on a specific bookmark element and remove that from the store
}

function handleRatingSelect() {
    // this function will listen for a selection on the rating selector and filter the bookmark list
}

function generateExtendedView {
    //this function will generate html and return it for the generation of extended view
}
function bindEventListeners() {
    //This function will call all event listeners that contain everything else to be use by user
}

export default {
    render,
    bindEventListeners,
}