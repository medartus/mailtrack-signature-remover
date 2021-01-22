console.log('mailtrack signature remover loaded');

const targetNode = document.body;

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true };

// Callback function to execute when mutations are observed
const callback = (mutationsList) => {
    for(const mutation of mutationsList) {
        if (mutation.type == 'childList') {
            removeSig();
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

document.addEventListener('paste', (e) => {
	setTimeout(() => {
	    removeSig();
	}, 500);
}, false);

buttonClick = (buttonClass) => {
	const elements = document.querySelectorAll(buttonClass);
	if(elements.length > 0){
		elements.forEach(element => {
			element.click();
		});
	}	
}

// Later, you can stop observing
removeSig = () => {
	buttonClick('.mt-remove-signature-button > .mt-remove')
	buttonClick('.modal-header > .close')
}