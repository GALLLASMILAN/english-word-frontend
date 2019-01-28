export default function (content) {
    // If the user is not authenticated console.log(window.__NUXT__, window.user);
    if (content.store.state.user.actualUser.role === 'guest') {
        return content.redirect('/user/login');
    }
}