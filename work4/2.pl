use strict;
use warnings;
use Time::Piece;
use Time::Seconds 'ONE_DAY';

my $input_date = '24.02.2022';

my $strp = Time::Piece->strptime($input_date, '%d.%m.%Y');
$strp += ONE_DAY;

print $strp->strftime("%d %B %Y");
