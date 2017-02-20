Meteor.methods({
  'carcustomizer.car.create'(car){
    return CarCustomizer.Car.create(car);
  },
  'carcustomizer.car.body.update.type'(id, type){
    return CarCustomizer.Car.updateBodyType(id, type);
  },
  'carcustomizer.car.body.update.color'(id, color){
    return CarCustomizer.Car.updateBodyColor(id, color);
  },
  'carcustomizer.car.wheels.update.type'(id, type){
    return CarCustomizer.Car.updateWheelsType(id, type);
  },
  'carcustomizer.car.wheels.update.color'(id, color){
    return CarCustomizer.Car.updateWheelsColor(id, color);
  },
});