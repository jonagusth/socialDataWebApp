<template>
  <div id="second">
    <div class="row align-items-center">
      <div class="col-md-12 p-3">
        <!-- <h3>Car ownership type by district</h3> -->
        <h3>Car ownership by district</h3>
      </div>
    </div>
    <div class="row align-items-center p-3">
      <div class="col-md-4">
        <img src="../assets/CopenhagenMapDist.gif" class="img-fluid border border-2 border-dark" />
      </div>
      <div class="col-md-8">
        <p class="text-start p-3">
          It can now be confirmed that the amount of electric and hybrid cars in
          Copenhagen has been rapidly increasing in the last 10 years or so but
          how are these cars distributed by areas? How do salaries and locations
          affect electric and hybrid car ownership?
        </p>
        <p class="text-start p-3">
          To be able to compare car data between neighborhoods, we analyze the
          number of cars per 100000 people in each neighborhood. First we
          prepare the new tables, then we plot the evolution of the number of
          cars per neighborhood in maps. This plot shows the evolution of car
          ownership by neighborhood in Copenhagen Metropolitan Area. The
          neigborhoods include City Centre, Østerbro, Nørrebro,
          Vesterbro/Kongens Enhave, Valby, Vanløse, Brønshøj-Husum, Bispebjerg,
          Amager Øst and Amager Vest. Here we can see that the number of cars
          over the years has increased in all neighborhoods since 2006, in
          bigger proportion in the north west part of the city at all times,
          this is Vanløse and Brønshøj. We compiled the maps in a animated gif
          file for the website with GifMaker.
        </p>
      </div>
    </div>

    <div class="row align-items-center p-3">
      <div class="col-md-6">
        <!-- <h4>Car ownership by district</h4> -->
        <p class="text-start p-3">
          Here the car trends for the four types of cars by neighbourhoods can
          be seen on a logarithmic scale. Electric cars started appearing in
          2008/2009 in the City Center and Amager vest. Nørrebro and Østerbro
          joined the list in 2013 and Vesterbro/Kongens Enghavein 2014. Electric
          then started appearing in the other neighbourhoods in 2015.\n\nHybrid
          cars started appearing in 2017 in many of the neigbourhoods. However
          they didn't start appearing in Bispebjerg and Vanløse until 2019. We
          saw that the total number of cars in Vanløse was one of the highest
          per person, but this chart shows the opposite for the specific case of
          hybrid cars. We suspect that this difference might be related to
          salaries, so let's have a look at annual salaries per person by
          neighborhood."
        </p>
      </div>
      <div class="col-md-6">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="6"
              aria-label="Slide 7"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="7"
              aria-label="Slide 8"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="8"
              aria-label="Slide 9"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="9"
              aria-label="Slide 10"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="10"
              aria-label="Slide 11"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="../assets/Neighborhoods/Copenhagen.png"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/Neighborhoods/AmagerØst.png"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/Neighborhoods/AmagerVest.png"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/Neighborhoods/Bispebjerg.png"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/Neighborhoods/Brønshøj.png"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/Neighborhoods/CityCentre.png"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/Neighborhoods/Nørrebro.png"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/Neighborhoods/Valby.png"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/Neighborhoods/Vanløse.png"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/Neighborhoods/Vesterbro.png"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/Neighborhoods/Østerbro.png"
                class="d-block w-100"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    <div class="row align-items-center p-3">
      <div class="col-md-6">
        <img src="../assets/Neighborhoods/AnnualSalaryDist.png" class="img-fluid"/>
      </div>
      <div class="col-md-6">
        <!-- <h4>Annual salaries by district</h4> -->
        <p class="text-start p-3">
          The following plot shows the average annual salaries (pre-tax) by
          neighborhood over time. This data is given for people who are eligible
          for work. The City Centre and Østerbro are the wealthiest
          neighborhoods whereas Nørrebro and Bispebjerg have the lowest average
          salary. There is a high contrast between some neighborhoods such as
          the City Centre and Nørrebro.
        </p>
      </div>
    </div>
    <div class="row align-items-center p-3">
      <div class="col-md-6">
        <!-- <h4>Car ownership vs salary by district</h4> -->
        <p class="text-start p-3">
          The following scatter plot shows the average number of cars registered
          per 100000 people by neighborhood over the years versus the average
          annual salary. Each dot represents the number of cars per 100000
          people for the average salary of those people in one year. The plot
          shos that Vanløse, Brønshøj-Husum and Valby (Copenhagen suburbs) are
          the neighborhoods where people have registered a higher number of cars
          per person than in the other neighborhoods, despite of not being the
          welthiest as we saw the previous section. Vesterbro and Nørrebro show
          the smallest number of car per person. We can see again here that the
          City Centre and Østerbro have the highest salaries, but the number of
          car per person is lower than in the suburbian areas. A possible cause
          for this can be related to the Copenhagen suburbs life style, parking
          space availability and public transport infrastructure. The scatter
          plot also shows that there seem to be a linear correlation between
          average number of cars and average annual salary for most
          neighborhoods. Lets have a look at the Pearson correlation and
          regresion lines for the same data.
        </p>
      </div>
      <div class="col-md-6">
        <img src="../assets/Neighborhoods/CarDistrict.png" class="img-fluid"/>
      </div>
    </div>
    <div class="row align-items-center p-3">
      <div class="col-md-6">
        <div id="carouselExampleIndicators2" class="carousel slide" data-bs-ride="carousel" >
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="5" aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="6" aria-label="Slide 7"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="7" aria-label="Slide 8"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="8" aria-label="Slide 9"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="9" aria-label="Slide 10"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../assets/PearsonLines/CorrelationAmagerØst.png" class="d-block w-100">
            </div>
            <div class="carousel-item">
              <img src="../assets/PearsonLines/CorrelationAmagerVest.png" class="d-block w-100" />
            </div>
            <div class="carousel-item">
              <img src="../assets/PearsonLines/CorrelationBispebjerg.png" class="d-block w-100" />
            </div>
            <div class="carousel-item">
              <img src="../assets/PearsonLines/CorrelationBrønshøj.png" class="d-block w-100" />
            </div>
            <div class="carousel-item">
              <img src="../assets/PearsonLines/CorrelationCityCentre.png" class="d-block w-100" />
            </div>
            <div class="carousel-item">
              <img src="../assets/PearsonLines/CorrelationNørrebro.png" class="d-block w-100" />
            </div>
            <div class="carousel-item">
              <img src="../assets/PearsonLines/CorrelationValby.png" class="d-block w-100" />
            </div>
            <div class="carousel-item">
              <img src="../assets/PearsonLines/CorrelationVanløse.png" class="d-block w-100" />
            </div>
            <div class="carousel-item">
              <img src="../assets/PearsonLines/CorrelationVesterbro.png" class="d-block w-100"  />
            </div>
            <div class="carousel-item">
              <img src="../assets/PearsonLines/CorrelationØsterbro.png" class="d-block w-100" />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="col-md-6">
        <!-- <h4>
          Regression lines and Pearsons correlation for car ownership vs salary
          by neighborhood
        </h4> -->
        <p class="text-start p-3">
          The following scatter plots shows the average number of cars registered
          per 100000 people over the years versus the average annual salary for
          every neighborhood. A linear regresion line has been added together
          with the Pearsons Correlation Coefficient that looks for linear
          relationship. Valby, Verterbro, Brønshøj-Husum and Amager show the
          highest Pearsons Correlation Coefficient (near to 1) indicating a
          strong linear relationship between car ownership and salary. In the
          City Centre and Nørrebro however the salary is not linearly related to
          the average number of cars per person.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SecondPage",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#second {
  /* background-color: rgb(235, 230, 226); */
  background-color: rgb(235, 230, 226);
  /* height: 700px; */
  width: 100%;
  padding-top: 30px;
}
.li .borderless {
  border-top: 0 none;
  border-bottom: 0 none;
}
</style>
