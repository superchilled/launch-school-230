# Example: Loading HTML via XHR

## Question 1

Each product in our final example has an edit form that you access by clicking first on the item link, and then on "Edit this product." The code, though, incorrectly handles the form when you submit it.

What prevents the form submission from working? Investigate the problem with the web developer tools in your browser.

### Answer

We are not preventing the default action of the form submission, and so a `POST` request is being sent to the relative url defined by the `form_action` attricbute of the `form` element rather than a call being made to the API. Since this relative path identifies a resource that is invalid in the context of the web page, the form submission does not work.
