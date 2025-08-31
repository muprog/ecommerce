// Debug script to test cookie functionality
// Run this in your browser console on your production site

console.log('=== Cookie Debug Script ===');

// Check if cookies are being set
function checkCookies() {
  console.log('All cookies:', document.cookie);
  
  // Check if the token cookie exists
  const tokenCookie = document.cookie.split(';').find(c => c.trim().startsWith('token='));
  if (tokenCookie) {
    console.log('Token cookie found:', tokenCookie);
    const token = tokenCookie.split('=')[1];
    console.log('Token value:', token.substring(0, 20) + '...');
  } else {
    console.log('No token cookie found');
  }
}

// Test API call
async function testProfileAPI() {
  try {
    console.log('Testing profile API...');
    const response = await fetch('/profile', {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);
    
    const data = await response.json();
    console.log('Response data:', data);
    
    if (data && data.email) {
      console.log('✅ User is authenticated:', data.email);
    } else {
      console.log('❌ User is not authenticated');
    }
  } catch (error) {
    console.error('API call failed:', error);
  }
}

// Test login
async function testLogin() {
  try {
    console.log('Testing login...');
    const response = await fetch('/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'test@example.com',
        password: 'testpassword'
      })
    });
    
    console.log('Login response status:', response.status);
    const data = await response.json();
    console.log('Login response data:', data);
    
    // Check cookies after login
    setTimeout(() => {
      console.log('Cookies after login:');
      checkCookies();
    }, 1000);
    
  } catch (error) {
    console.error('Login test failed:', error);
  }
}

// Run tests
console.log('Running cookie tests...');
checkCookies();
testProfileAPI();

// Export functions for manual testing
window.debugCookies = {
  checkCookies,
  testProfileAPI,
  testLogin
};

console.log('Debug functions available as window.debugCookies');
