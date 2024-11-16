<template>
    <div>
        <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
        <div class="details-container mt-10">
            <div v-for="(data, index) in chartData.datasets[0].data" :key="index"
                class="detail-item flex items-center p-4 border rounded-lg shadow-sm mb-4">
                <!-- Image of the month -->
                <img :src="imageUrls[index]" alt="month image" class="w-16 h-16 rounded-full mr-4" />

                <!-- Detail Text -->
                <div class="flex flex-col w-full">
                    <div class="flex flex-col">
                        <div class="flex justify-between items-center">
                            <span class="text-xl font-bold">{{ chartData.labels[index] }}</span>
                            <span class="text-lg font-bold text-gray-600">{{ data }}%</span>
                        </div>
                        <span class="text-sm text-gray-500 mt-1">{{ monthDays[index] }}</span>
                    </div>
                    <div class="relative w-full h-6 mt-2">
                        <div class="absolute top-0 left-0 h-full rounded-lg"
                            :style="{ width: data + '%', backgroundColor: chartData.datasets[0].backgroundColor[index] }">
                        </div>
                        <div
                            class="absolute top-0 left-0 h-full flex items-center justify-end pr-2 w-full text-gray-800">
                            <span class="relative z-10 text-sm">{{ data }}%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import january from '@/src/assets/1.jpeg'
import february from '@/src/assets/2.jpeg'
import march from '@/src/assets/3.jpeg'
import april from '@/src/assets/4.jpeg'
import may from '@/src/assets/5.jpeg'
import june from '@/src/assets/6.jpeg'
import july from '@/src/assets/7.jpeg'
import august from '@/src/assets/8.jpeg'
import september from '@/src/assets/9.jpeg'
import october from '@/src/assets/10.jpeg'
import november from '@/src/assets/11.jpeg'
import december from '@/src/assets/12.jpeg'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'BarChart',
    components: { Bar },
    data() {
        // Define specific data and colors
        const specificData = [45, 60, 30, 80, 55, 70, 90, 40, 65, 75, 50, 85];
        const specificColors = [
            '#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33A6', '#A6FF33',
            '#33FFF5', '#FF6F33', '#6F33FF', '#FF33B5', '#33FF8E', '#FF9E33'
        ];

        // Image URLs
        const imageUrls = [
            january,
            february,
            march,
            april,
            may,
            june,
            july,
            august,
            september,
            october,
            november,
            december,
        ];

        // Month days with leap year adjustment
        const monthDays = [
            '31 days', 
            '28 or 29 days (leap year)', 
            '31 days', 
            '30 days', 
            '31 days', 
            '30 days', 
            '31 days', 
            '31 days', 
            '30 days', 
            '31 days', 
            '30 days', 
            '31 days'
        ];

        return {
            chartData: {
                labels: [
                    'January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'
                ],
                datasets: [{
                    data: specificData,
                    backgroundColor: specificColors
                }]
            },
            chartOptions: {
                responsive: true
            },
            imageUrls,
            monthDays
        }
    }
}
</script>
