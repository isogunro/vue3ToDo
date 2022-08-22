<template>
    <div>
        <h5>Popup</h5>
        <div class="p-fluid grid formgrid">
            <div class="field col-12 md:col-4">
                <label for="basic">Basic</label>
                <Calendar id="basic" v-model="date1" autocomplete="off" />
            </div>
            <div class="field col-12 md:col-4">
                <label for="dateformat">DateFormat</label>
                <Calendar id="dateformat" v-model="date2"  dateFormat="mm-dd-yy" />
            </div>
            <div class="field col-12 md:col-4">
                <label for="icon">Icon</label>
                <Calendar id="icon" v-model="date3" :showIcon="true" />
            </div>
            <div class="field col-12 md:col-4">
                <label for="minmax">MinMax</label>
                <Calendar id="minmax" v-model="date4" :minDate="minDate" :maxDate="maxDate" :manualInput="false" />
            </div>
            <div class="field col-12 md:col-4">
                <label for="disableddays">Disabled Days</label>
                <Calendar id="disableddays" v-model="date5" :disabledDates="invalidDates" :disabledDays="[0,6]" :manualInput="false" />
            </div>
            <div class="field col-12 md:col-4">
                <label for="multiple">Multiple</label>
                <Calendar id="multiple" v-model="dates1" selectionMode="multiple" :manualInput="false" />
            </div>
            <div class="field col-12 md:col-4">
                <label for="range">Range</label>
                <Calendar id="range" v-model="dates2" selectionMode="range" :manualInput="false" />
            </div>
            <div class="field col-12 md:col-4">
                <label for="buttonbar">Button Bar</label>
                <Calendar id="buttonbar" v-model="date6" :showButtonBar="true" />
            </div>
            <div class="field col-12 md:col-4">
                <label for="time24">Time / 24h</label>
                <Calendar id="time24" v-model="date7" :showTime="true" :showSeconds="true" />
            </div>
            <div class="field col-12 md:col-4">
                <label for="time12">Time / 12h</label>
                <Calendar id="time12" v-model="date8" :timeOnly="true" hourFormat="12" />
            </div>
            <div class="field col-12 md:col-4">
                <label for="monthpicker">Month Picker</label>
                <Calendar id="monthpicker" v-model="date9" view="month" dateFormat="mm/yy"  />
            </div>
            <div class="field col-12 md:col-4">
                <label for="yearpicker">Year Picker</label>
                <Calendar id="yearpicker" v-model="date10" view="year" dateFormat="yy"/>
            </div>
            <div class="field col-12 md:col-4">
                <label for="multiplemonths">Multiple Months</label>
                <Calendar id="multiplemonths" v-model="date11" :numberOfMonths="3" :responsiveOptions="responsiveOptions" />
            </div>
            <div class="field col-12 md:col-4">
                <label for="datetemplate">Date Template</label>
                <Calendar id="datetemplate" v-model="date12">
                    <template #date="slotProps">
                        <strong v-if="slotProps.date.day > 10 && slotProps.date.day < 15" class="special-day">{{slotProps.date.day}}</strong>
                        <template v-else>{{slotProps.date.day}}</template>
                    </template>
                </Calendar>
            </div>
            <div class="field col-12 md:col-4">
                <label for="touchUI">TouchUI</label>
                <Calendar id="touchUI" v-model="date13" :touchUI="true" />
            </div>
        </div>

        <h5>Inline</h5>
        <Calendar v-model="date14" :inline="true" :showWeek="true" />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month -1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;

        const minDate = ref(new Date());
        const maxDate = ref(new Date());
        const invalidDates = ref();
        const date1 = ref();
        const date2 = ref();
        const date3 = ref();
        const date4 = ref();
        const date5 = ref();
        const date6 = ref();
        const date7 = ref();
        const date8 = ref();
        const date9 = ref();
        const date10 = ref();
        const date11 = ref();
        const date12 = ref();
        const date13 = ref();
        const date14 = ref();
        const dates1 = ref();
        const dates2 = ref();
        const responsiveOptions = ref([
            {
                breakpoint: '1400px',
                numMonths: 2
            },
            {
                breakpoint: '1200px',
                numMonths: 1
            }
        ]);

        minDate.value.setMonth(prevMonth);
        minDate.value.setFullYear(prevYear);
        maxDate.value.setMonth(nextMonth);
        maxDate.value.setFullYear(nextYear);

        let invalidDate = new Date();
        invalidDate.setDate(today.getDate() - 1);
        invalidDates.value = [today, invalidDate];
</script>

<style scoped>
.special-day {
    text-decoration: line-through;
}
</style>