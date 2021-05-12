<template>
  <div id="first">
    <!-- <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <p>
              In this project we look and analize car ownership for Copenhagen
              metropolitan area in the period of time between 2006 and 2020. We
              loaded and filtered the data from
              <a href="https://www.dst.dk/">Statistik Banken</a>. The raw data
              include tables on new private cars registered every year in every
              neighborhood in Copenhagen. Then we plotted the data using
              different visualization tools that include histograms, scatter
              plots and maps, and we analyzed it looking for trends and
              singularities. Our visualization focuses on:
            </p>
            <ul class="list-group-flush">
              <li class="list-group-item">
                Car ownership by type over time in Copenhagen
              </li>
              <li class="list-group-item">
                Car ownership type by neighborhood
              </li>
              <li class="list-group-item">
                Trends of electric and hybrid cars, popularly knows as
                <strong>'green cars'</strong>
              </li>
              <li class="list-group-item">
                The future of car ownership in Copenhagen
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div> -->
    <div class="row">
      <div class="col-8">
        <p>
          In this project we look and analize car ownership for Copenhagen
          metropolitan area in the period of time between 2006 and 2020. We
          loaded and filtered the data from
          <a href="https://www.dst.dk/">Statistik Banken</a>. The raw data
          include tables on new private cars registered every year in every
          neighborhood in Copenhagen. Then we plotted the data using different
          visualization tools that include histograms, scatter plots and maps,
          and we analyzed it looking for trends and singularities. Our
          visualization focuses on:
        </p>
        <ul class="list-group-flush">
          <li class="list-group-item border-0">Car ownership by type over time in Copenhagen</li>
          <li class="list-group-item border-0">Car ownership type by neighborhood</li>
          <li class="list-group-item border-0">
            Trends of electric and hybrid cars, popularly knows as  <strong>'green cars'</strong>
          </li>
          <li class="list-group-item border-0">The future of car ownership in Copenhagen</li>
        </ul>
      </div>
      <div class="col-4">
        <img src="../assets/CopenhagenMap.gif" />
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <img src="../assets/CopenhagenMap.gif" />
      </div>
      <div class="col-6"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FirstPage",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#first {
  /* background-color: rgb(235, 230, 226); */
  background-color: rgb(255, 255, 255);
  height: 700px;
  width: 100%;
}
.li .borderless{
  border-top: 0 none;
  border-bottom: 0 none;
}
</style>
