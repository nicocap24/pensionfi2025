import { useEffect } from 'react'
import * as am5 from '@amcharts/amcharts5'
import * as am5xy from '@amcharts/amcharts5/xy'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'
import am5themes_Responsive from '@amcharts/amcharts5/themes/Responsive'

function ChartComponent({ data, graphTitle, noData, actualizado }) {
	useEffect(() => {
		let root = am5.Root.new('chartdiv')
		const responsive = am5themes_Responsive.new(root)
		responsive.addRule({
			name: 'XYChart',
			relevant: function (width, height) {
				return width < 1000
			},
			settings: {
				layout: root.verticalLayout,
			},
		})
		root.setThemes([am5themes_Animated.new(root), responsive])

		let chart = root.container.children.push(
			am5xy.XYChart.new(root, {
				panX: true,
				panY: true,
				wheelX: 'panX',
				wheelY: 'zoomX',
				pinchZoomX: true,
				paddingLeft: 0,
			}),
		)

		chart
			.get('colors')
			.set('colors', [
				am5.color(0xe02222),
				am5.color(0xeefc0b),
				am5.color(0x0936d9),
				am5.color(0xd909cc),
				am5.color(0x09d9cb),
			])

		let cursor = chart.set('cursor', am5xy.XYCursor.new(root, {}))
		cursor.lineX.set('forceHidden', true)
		cursor.lineY.set('forceHidden', true)

		let xAxis = chart.xAxes.push(
			am5xy.DateAxis.new(root, {
				baseInterval: { timeUnit: 'day', count: 1 },
				renderer: am5xy.AxisRendererX.new(root, {
					minorGridEnabled: true,
					minGridDistance: 80,
				}),
				tooltipDateFormat: 'yyyy-MM-dd', // Asegura que el formato de la fecha en el tooltip sea consistente
			}),
		)

		let yAxis = chart.yAxes.push(
			am5xy.ValueAxis.new(root, {
				renderer: am5xy.AxisRendererY.new(root, { inversed: false }),
				opposite: true,
				min: Math.min(
					...data.map(d =>
						Math.min(d.value1, d.value2, d.value3, d.value4, d.value5),
					),
				),
				max: Math.max(
					...data.map(d =>
						Math.max(d.value1, d.value2, d.value3, d.value4, d.value5),
					),
				),
			}),
		)

		// Ordenar los datos por fecha
		const sortedData = data.sort((a, b) => a.date - b.date)

		// Series
		const createSeries = (name, valueYField) => {
			let series = chart.series.push(
				am5xy.LineSeries.new(root, {
					name,
					xAxis,
					yAxis,
					valueYField, // Este debe coincidir con value1, value2, etc.
					valueXField: 'date',
					tooltip: am5.Tooltip.new(root, {
						labelText: `${name}: {valueY}%`,
					}),
				}),
			)

			series.data.setAll(sortedData)
			series.strokes.template.setAll({
				strokeWidth: 3,
				strokeOpacity: 1,
				shadowBlur: 2,
				shadowOffsetX: 2,
				shadowOffsetY: 2,
				shadowColor: am5.color(0x000000),
				shadowOpacity: 0.1,
			})

			return series
		}

		createSeries('FONDO A', 'value1')
		createSeries('FONDO B', 'value2')
		createSeries('FONDO C', 'value3')
		createSeries('FONDO D', 'value4')
		createSeries('FONDO E', 'value5')

		chart.set(
			'scrollbarX',
			am5.Scrollbar.new(root, {
				orientation: 'horizontal',
			}),
		)

		chart.series.each(series => {
			series.appear(1000)
		})
		chart.appear(1000, 100)

		let legend = chart.children.push(
			am5.Legend.new(root, {
				x: am5.percent(50),
				centerX: am5.p50,
				centerY: am5.p100,
				y: 460,
				marginBottom: 10,
			}),
		)

		legend.data.setAll(chart.series.values)

		return () => {
			root.dispose()
		}
	}, [data])

	return (
		<>
			{noData && (
				<span className='text-red-600 italic font-bold'>
					*Datos no disponibles en ese rango de fechas
				</span>
			)}
			<span>{actualizado}</span>
			<h1 className='text-2xl md:text-3xl mt-4 text-center font-bold'>
				Tabla de rentabilidad nominal de {graphTitle}
			</h1>
			<div id='chartdiv' className='w-full min-h-[460px] mb-20'></div>
		</>
	)
}

export default ChartComponent
