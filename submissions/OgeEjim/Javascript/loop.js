for ( var i = 1; i <= 123-7; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log( i + " Software Developer" );
  }
  else if ( i%3 === 0 ) 
  {
    console.log(i+ " Software" );
  }
  else if ( i%5 === 0 ) 
  {
    console.log(i+ " Developer" );
  }
  else
  {
    console.log(i);
  }
}