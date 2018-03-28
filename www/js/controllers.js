angular.module('starter.controller', [])

.controller('DashCtrl', function($scope, Materias) {
  console.log('entrei');
  $scope.materias = Materias.all();
  console.log($scope.materias);
  let card = document.getElementById("card");
  
  $scope.faltou = (materia) =>{
    $scope.materias.materia = {faltas: materia.faltas++};

    
  }

  $scope.addMateria = () =>{
   console.log('outra'); 
   window.location.href = "add-materia.html";
  }

  $scope.rmMateria = (materia) =>{
    Materias.remove(materia);
    
  }

  $scope.rmFalta = (materia) =>{
    if(materia.faltas != 0){
      $scope.materias.materia = {faltas: materia.faltas--};
    }
  }
})

.controller('AddMateriaCtrl', function($scope, Materias) {
  console.log('materia');
  
  $scope.addMateria = (nomemat, maxfalta) =>{
    let materia = {
      nome: nomemat,
      faltas: 0,
      max: maxfalta
    }
    Materias.push(materia);

    console.log(Materias.all());
    window.location.href = "index.html";
  }
})