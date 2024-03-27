my $string = "abc123456def7890ghi";
my $max_digits = 0;
my $current_digits = 0;

while ($string =~ /(\d+)/g) {
    my $digits = $1;
    my $length = length($digits);
    
    if ($length > $max_digits) {
        $max_digits = $length;
    }
}

print "Max digits: $max_digits\n";
