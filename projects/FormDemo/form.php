<div class="container">
  <form id="form" onsubmit="return validateForm();" action="createUser.php" method="post">
    <input type="hidden" name="flowCheck" value="valid" />
    <!-- Email Address -->
    <div id="emailContainer" class="form-group">
      <label for="email">Email Address</label>
      <input type="email" class="form-control" name="email" id="email" placeholder="Email">
    </div>
    <!-- Password -->
    <div id="passwordContainer" class="form-group">
      <label for="password">Password</label>
      <input type="password" class="form-control" name="password" id="password" placeholder="Password">
    </div>
    <!-- City -->
    <div id="cityContainer" class="form-group">
      <label for="city">City</label>
      <input type="text" class="form-control" name="city" id="city" placeholder="City">
    </div>  
    <!-- State Dropdown -->
    <div class="form-group">
      <label for="state">State</label>
      <select class="form-control" name="state">
        <option class="form-control" value="Wisconsin">Wisconsin</option>
        <option class="form-control" value="Minnesota">Minnesota</option>
        <option class="form-control" value="Iowa">Iowa</option>
        <option class="form-control" value="Illinois">Illinois</option>
        <option class="form-control" value="Michigan">Michigan</option>
      </select>
    </div>
    <!-- Zipcode -->
    <div id="zipContainer" class="form-group">
      <label for="zip">Zip Code</label>
      <input type="text" class="form-control" name="zip" id="zip" placeholder="Zip Code">
    </div> 
    <!-- Special Offers Radio Buttons -->
    <div class="form-group">
      <input type="radio" name="offers" value="Yes" checked /> I would like to receive email offers.<br />
      <input type="radio" name="offers" value="No" /> I would NOT like to receive email offers.<br />
    </div>
    <!-- Terms and Conditions Checkbox -->
    <div id="checkboxContainer" class="checkbox">
      <label>
        <input type="checkbox" name="termsAndConditions" id="termsAndConditions"> I agree to the terms and conditions.
      </label>
    </div>
    <!-- Submit Button -->
    <button type="submit" class="btn btn-default">Submit</button>
  </form>
</div>
