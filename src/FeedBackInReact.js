import React from 'react';
import './App.css';

function FeedBackInReact() {
  return (
    <div className='main'>
      <h1>Feedback Form</h1>
      <p>Please provide your feedback below:</p>
      <hr/>
      <form>
        <table>
        <tbody>
        <tr>
          <td><label htmlfor='name'>Name:</label></td>
          <td><input type='text' id='name' name='name'/></td>
        </tr>
        <tr>
          <td><label htmlfor='email'>Email:</label></td>
          <td><input type='email' id='email' name='email'/></td>
        </tr>
        <tr>
          <td><label htmlfor='feedback'>Feedback:</label></td>
          <td><textarea id='feedback' name='feedback'/></td>
        </tr>
        <tr>
          <td><input type='submit' value='Submit'/></td>
        </tr>
        </tbody>
        </table>
      </form>
    </div>
  );
}

export default FeedBackInReact;
