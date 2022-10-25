const express = require('express');

var cityController = require('../Controllers/City');
var mealTypeController = require('../Controllers/MealType');
var restaurantController = require('../Controllers/Restaurant');
var userController = require('../Controllers/User');
var paymentGatewayController = require('../Controllers/PaymentGateway');

const router = express.Router();

router.get('/cityList', cityController.getCityList);
router.get('/getRestaurantsbycity/:cityId', restaurantController.getRestaurantByCity);
router.get('/mealtype', mealTypeController.getMealType);
router.post('/restaurantfilter', restaurantController.filterSearch);
router.get('/getResById/:resId', restaurantController.getRestaurantById);
router.get('/getItemsbyrestaurant/:resId', restaurantController.getItemsByRestaurant);
router.post('/signup', userController.signUp);
router.get('/login', userController.login);
router.post('/payment', paymentGatewayController.payment);
router.post('/callback', paymentGatewayController.callback);


router.post('/addcityList', cityController.addCityList);
router.post('/addmealtype', mealTypeController.addMealType);
router.post('/addRestaurantList', restaurantController.addRestaurantList);

module.exports = router;