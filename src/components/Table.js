import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
	head: {
		backgroundColor: 'rgba(100,100,100, .8)',
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const theme = createMuiTheme({
	palette: {
		type: 'light',
	},
});

const styles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto',
	},
	table: {
		minWidth: 700,
	},
	row: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.background.default,
		},
	},
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
	id += 1;
	return { id, name, calories, fat, carbs, protein };
}

const rows = [
	createData('5:30 PM', 'August 13th', 5, 'Mike', `Parson's`),
	createData('6:00 PM', 'August 13th', 4, 'Joe', 'Resort'),
];

function CustomizedTable(props) {
	const { classes } = props;

	return (
		<Paper className={classes.root}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<CustomTableCell>Time</CustomTableCell>
						<CustomTableCell numeric>Date</CustomTableCell>
						<CustomTableCell numeric>Count</CustomTableCell>
						<CustomTableCell numeric>User</CustomTableCell>
						<CustomTableCell numeric>Location</CustomTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map(row => {
						return (
							<TableRow className={classes.row} key={row.id}>
								<CustomTableCell component="th" scope="row">
									{row.name}
								</CustomTableCell>
								<CustomTableCell numeric>{row.calories}</CustomTableCell>
								<CustomTableCell numeric>{row.fat}</CustomTableCell>
								<CustomTableCell numeric>{row.carbs}</CustomTableCell>
								<CustomTableCell numeric>{row.protein}</CustomTableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</Paper>
	);
}

CustomizedTable.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);
