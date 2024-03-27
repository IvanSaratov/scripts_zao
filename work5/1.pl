use strict;
use warnings;
use MP3::Tag;

my $mp3_file = 'song.mp3';

my $mp3 = MP3::Tag->new($mp3_file);
my ($title, $artist, $album, $year) = $mp3->autoinfo();

$mp3->close();

my $output_file = 'mp3_info.txt';

open(my $fh, '>', $output_file) or die "Can't open file '$output_file' $!";
print $fh "Name: $title\n";
print $fh "Artist: $artist\n";
print $fh "Album: $album\n";
print $fh "Year: $year\n";
close $fh;

print "Save to file '$output_file'\n";
