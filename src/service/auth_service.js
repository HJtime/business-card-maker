import firebase from 'firebase';

class AuthService{ //로그인 로그아웃 관련된 역할만 수행
    login(providerName){ //구글인지 트위터인지 providerName로 받아옴(반복되는 로직)
        const authProvider=new firebase.auth[`${providerName}AuthProvider`]();

        return firebase.auth().signInWithPopup(authProvider);
    }
}

export default AuthService;