import './App.css'

const DATA = [
	{ name: "Producto A", price: 100 },
	{ name: "Producto B", price: 200 },
	{ name: "Producto C", price: 153 },
]

function App() {
	const total = DATA.reduce((sum, item) => sum + item.price, 0)

	return (
		<>
			<div className='container'>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						{DATA.map((item, index) => (
							<tr key={index}>
								<td>{item.name}</td>
								<td>${item.price}</td>
							</tr>
						))}
					</tbody>
					<tfoot>
						<tr>
							<td><strong>Total</strong></td>
							<td><strong>${total}</strong></td>
						</tr>
					</tfoot>
				</table>
			</div>
		</>
	)
}

export default App
