const options = {
	face: {
		fastMode: true,
		maxDetectedFaces: 1
	},
	barcode: {},
	text: {}
}
async function detectShape( image, type ) {
	const bitmap = await createImageBitmap( image );
	const detector = new window[ getDetectorName( type ) ]( options[ type ] );
	const detected = await detector.detect( bitmap );

	return detected;
}

function getDetectorName( type ) {
	return `${ type[ 0 ].toUpperCase() }${ type.substring( 1 ) }Detector`;
}

export default detectShape;
