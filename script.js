let currentUser = null;

function toggleForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 여기에서 서버 측 로직을 구현해야 합니다. (예: 사용자 인증)

    // 간단한 예제에서는 사용자 이름을 현재 사용자로 저장합니다.
    currentUser = username;

    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'none';
    document.querySelector('button[onclick="toggleForm()"]').style.display = 'none';
    document.querySelector('button[onclick="logout()"]').style.display = 'block';
}

function signup() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // 여기에서 서버 측 로직을 구현해야 합니다. (예: 사용자 등록)

    // 간단한 예제에서는 사용자 이름을 현재 사용자로 저장합니다.
    currentUser = newUsername;

    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'none';
    document.querySelector('button[onclick="toggleForm()"]').style.display = 'none';
    document.querySelector('button[onclick="logout()"]').style.display = 'block';
}

function logout() {
    currentUser = null;

    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
    document.querySelector('button[onclick="toggleForm()"]').style.display = 'block';
    document.querySelector('button[onclick="logout()"]').style.display = 'none';
}

