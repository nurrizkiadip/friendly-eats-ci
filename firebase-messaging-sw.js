/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
importScripts('https://www.gstatic.com/firebasejs/9.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.7.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyBYpPYXYcsIk1nXgKF2enHU_yyrcSs12MY',
  authDomain: 'friendly-eats-aaa7f.firebaseapp.com',
  projectId: 'friendly-eats-aaa7f',
  storageBucket: 'friendly-eats-aaa7f.appspot.com',
  messagingSenderId: '737449910539',
  appId: '1:737449910539:web:7b41e4904f9ae6da86820e',

  // databaseURL: 'https://friendly-eats-5c2b4.firebaseio.com',
  // measurementId: 'G-M86R7EN02K',
});

firebase.messaging();
