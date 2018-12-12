export default function ({store, redirect}) {
    // If the user is not authenticated
    if (store.state.user.actualUser.role === 'guest') {
        return redirect('/user/login');
    }
}