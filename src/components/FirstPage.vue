<template>
  <div id="first">
    <div class="row">
      <div class="col-12">
        <p class="text-start p-3">
          In this project we look and analize car ownership for Copenhagen
          metropolitan area in the period of time between 2006 and 2020. We
          loaded and filtered the data from
          <a href="https://kk.statistikbank.dk/statbank5a/default.asp?w=1536"
            >København Statistikbank</a
          >
          and <a href="https://www.opendata.dk/">Open Data DK</a>
          . The raw data include tables on new private cars registered every
          year in every neighborhood in Copenhagen. Then we plotted the data
          using different visualization tools that include histograms, scatter
          plots and maps, and we analyzed it looking for trends and
          singularities. Our visualization focuses on:
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-8">
        <ul class="list-group-flush">
          <li class="list-group-item border-0">
            Car ownership by type over time in Copenhagen
          </li>
          <li class="list-group-item border-0">
            Car ownership type by neighborhood
          </li>
          <li class="list-group-item border-0">
            Trends of electric and hybrid cars, popularly knows as
            <strong>'green cars'</strong>
          </li>
          <li class="list-group-item border-0">
            The future of car ownership in Copenhagen
          </li>
        </ul>
      </div>
      <div class="col-4">
        <img src="../assets/CopenhagenMap.gif" />
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <img src="../assets/CopenBar.png" />
      </div>
      <div class="col-6">
        <h4>1. Car ownership over time for Copenhagen Metropolitan Area</h4>
        <p class="text-start p-3">
          The topic of sustainability and living an environmentally friendly
          lifestyle is constantly growing. Denmark is one of the frontrunners of
          implementing the United Nations Sustainable development goals and
          Copenhagen is a hub for innovation and development of sustainable
          solutions. In the recent years there has been a shift in car
          ovnership. People are more and more switching from benzin and disel
          cars to more sustainable elecric and hybrid cars. <br />
          First let's look at how car ownershipt in Copenhagen has been
          developing.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <p class="p-3">Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.</p>
      </div>
      <div class="col-6">
        <p class="p-3">Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.</p>
      </div>
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
  /* height: 700px; */
  width: 100%;
}
.li .borderless {
  border-top: 0 none;
  border-bottom: 0 none;
}
</style>
