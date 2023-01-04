import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';
contactFormEl = document.querySelector('.feedback-form');
const userInfo = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};


const fillContactFormFields = () => {
    try {
        const userInfoFromLS = JSON.parse(localStorage.getItem(STORAGE_KEY));
        if (!userInfoFromLS) {
            return
        }
        for (const prop in userInfoFromLS) {
            contactFormEl.elements[prop].value = userInfoFromLS[prop]
        }
    } catch (err) {
        console.error('err :>> ', err);
    }
}
fillContactFormFields();

const onContactFieldChange = event => {
    const { target } = event;
    const fieldValue = target.value;
    const fieldName = target.name;
    userInfo[fieldName] = fieldValue;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userInfo));
}

const onContactFormSubmit = event => {
    event.preventDefault();
    contactFormEl.reset();
    console.log('userInfo :>> ', userInfo);
    localStorage.removeItem(STORAGE_KEY);

}


contactFormEl.addEventListener('input', throttle(onContactFieldChange, 1000));
contactFormEl.addEventListener('submit', onContactFormSubmit);
