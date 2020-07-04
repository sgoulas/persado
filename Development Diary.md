18/9

Δημιούργησα την δομή του project και τους φακέλους που θα χρησιμοποιήσω. Έστησα το πρώτο σχέδιο για τη βάση και εισήγαγα κατευθείαν κάποια mock up
δεδομένα από το MySQLi για να πειραματιστώ με τη δομή της βάσης.

Με βάση την δομή, αναλογίστηκα το trade off ανάμεσα σε πολλά μοιρασμένα αρχεία και σε κάποιο κεντρικό. Αποφάσισα στα πολλά διαμοιρασμένα.
Ωστόσο για το deployment δεν θα μου άρεσε να φορτώνει η σελίδα πολλά μικρά αρχεία γιατί έτσι αυξάνονται τα HTTP requests και επηρεάζεται το page
load. Η λύση για αυτό θα ήταν να χρησιμοποιήσω webpack, αλλά την απέρριψα γιατί πιστεύω θα ήταν εκτός scope του assignment και θα έπρεπε και
να αλλάξω τον κώδικα (requires, module exports στα επιμέρους αρχεία κλπ) κάτι που θα πρόσθετε επιπλέον βήματα στη διαδικασία installation
για αυτήν/αυτόν που θα αξιολογήσει τον κώδικά μου και δεν θα το ήθελα.

Έστησα τις σελίδες δημιουργίας βιβλίου και χρήστη και σε αυτό το σημείο έπρεπε να αποφασίσω αν θα έγραφα validations για τις φόρμες.
Λόγω πολύ περιορισμένου χρόνου δεν το έκανα, ωστόσο γενικά οι επιλογές μου θα ήταν είτε κάποιος έτοιμος validator (βλέπε parsley) είτε
να έγραφα δικά μου, αξιοποιώντας regexes και custom events. Το πρώτο προσφέρει έτοιμα error messages (τα οποία είναι λίγο ταλαιπωρία να
δημιουργήσεις μόνος σου σαν δυναμικά html elements, ειδικά αν θες να είναι και mobile first η εμπειία), αλλά το δεύτερο προσφέρει μεγαλύτερο έλεγχο.

Hours worked: 20:00 -> 02:15 => 6:15 hours

19/9

Δόμησα τα βιβλία και τους χρήστες σαν ES6 classes για να μπορώ να κάνω expose για κάθε object ένα σύνολο getters και setters για όταν
θα χειρίζομαι τα δεδομένα.
Σχετικά με το index, αποφασίζω πως θα πρέπει αν μπει στον πίνακα registry μιας και αυτόν θα κοιτάζω περισσότερο για να ελέγχω δανεισμένα βιβλία
το οποίο αναμένω να είναι και το πιο συχνό query, σε αντίθεση με τη δημιουργία νέων χρηστών και βιβλίων τα οποία γίνονται πιο σπάνια σε σύγκριση
με συνεχείς αναζητήσεις δανεισμών και επιστροφών.

Έγραψα τα mock up queries με βάση την υφιστάμενη δομή του database μου.

Συνειδητοποίηα πως το ajax call θα μπορούσε να είναι επιτυχές μιας και ο server επιστρέφει HTTP 200 όταν βρίσκει το php αρχεί,
αλλά παρόλα αυτά το db operation να κάνει fail οπότε το διόρθωσα ελέγχοντας το επιστρεφόμενο μήνυμα.

Ολοκλήρωσα το rendering χρηστών στο DOM, αλλά έχασα αρκετό χρόνο μέχρι να βρω πως θα "πακετάρω" την απάντηση του query σε JSON.

Hours worked: 10:30 -> 2:00 => 3.30 hours

20/9

Τελείωσα με το parsing των users σαν λίστα από objects και στη συνέχεια έφτιαξα το προσχέδιο για το πώς θα παρουσιάζονται.
Η λίστα θα φορτώνει onload και επειδή δεν μπορούμε να ξέρουμε πόσους θα έχουμε θα χρησιμοποιήσω δυναμική κατασκευή html στοιχείων
και για να είναι οργανωμένη θα χρησιμοποιήσω handlebars.js μιας και θα μπορώ πολύ εύκολο να δημιουργώ δυναμικά στοιχεία ίδιας μορφης στο DOM
(πχ καταχωρήσεις σε λίστα) χωρίς να κάνω το mark up και τον javascript κώδικά μου μπερδεμένο.

Άλλαξα την δομή του get users γιατί μου άρεσε περισσότερο να είναι το ajax call και το promise μαζί με το handlebars scripts
γιατί σε αντίθεση με τα add user/book, αυτό πρέπει να γίνει onload και μερικές φορές είναι δύσκολο να ακολουθήσεις την ροή των events όταν
πρέπει να μοιράσεις την προσοχή σου ανάμεσα σε ένα dom ready event και ένα script που εκτελείται κατευθείαν.

Επίσης δεν μου άρεσε που η μεταβλητή users που έχει τα db objects αρχικοποιούνταν σε ένα αρχείο αλλά χρησιμοποιούνταν σε ένα άλλο (αυτό θα μπορούσε να λυθεί
με webpack και να έκανα require κάθε αρχείο όπου το χρειαζόμουν. Αυτό θα λύνονταν ωστόσο με webpack και node.

Για το delete user functionality αναρωτήθηκα αν θα έπρεπε να ελέγχω τα βιβλία που έχει δυναμικά με ajax call στη βάση ή να βασιστώ στα δεδομένα που τράβηξα onload.
Δεδομένου πως το σύστημα είναι κεντρικό και αλλάζει μόνο από έναν χρήστη, επέλεξα τη δεύτερη επιλογή, αλλά αν το σύστημα
ήταν να εγκατασταθεί σε πολλούς υπολογιστές τότε θα έκανα τον έλεγχο ασύγχρονο με νέο query στη βάση για να ελέγχω σωστά αν τα δεδομένα έχουν αλλάξει
από τη στιγμή που έγιναν load στη σελίδα.

Επίσης αναλογίστηκα τι εξυπηρετεί να χειρίζομαι τα db objects σαν class object στο front end. Αρχικά ήθελα να τα μοντελοποιήσω σαν κλάσεις γιατί σκέφτηκα πως θα ήταν
ευκολότερος ο χειρισμός τους όταν θα προσθέτω / διαγράφω πράγματα στο DOM, αλλά πρακτικά ήδη έχω πίνακα με database objects σαν JSON.

Αν θέλω πριν καλέσω την handlebars να φτιάξω ένα class object πρακτικά θα είχα ένα database object που θα μετέτρεπα σε info object που θα το τάιζα στον class constructor και από το class object που θα μου επέστρεφε θα καλούσα την .toJSON() για να μου δώσει ένα object με τα properties του class object το οποίο θα έδινα σαν όρισμα στην handlebars template συνάρτηση. Όλα αυτά τα βήματα είναι αχρείαστα ειδικά από τη στιγμή που τα operations είναι τόσο απλά (άπαξ και κάνω render κάτι
ο μόνος τρόπος να το πειράξω είναι να το διαγράψω). Εν τέλει νομίζω ήταν λίγο overenginner η χρήση ES6 classes δεδομένου του πόσο απλού ήταν το assignment, μιας και
το μεγάλο τους πλεονέκτημα (object methods για ευκολότερο update) δεν αξιοποιούνταν, αφού αυτό το app τυπικά απλά κάνει render πληροφορία χωρίς ιδιαίτερα σύνθετο
functionality.

Hours worked: 21:15 -> 12:00 => 2:45 hours

21/9

Σκοπός μου είναι να τελειώσω το manage user page βρίσκοντας και το ποια βιβλία έχει δανειστεί ο χρήστης.
Θεωρητικά θα μπορούσα να κάνω το loan book to user functionality και μετά να επιστρέψω ξανά στην manage user page, αλλά αποφάσισα να στήσω
mock up data κάνοντας δύο manual εισαγωγές στη βάση δεδομένων για να έχω δεδομένα να συλλέξω όταν ένας χρήστης δεν μπορεί να διαγραφεί επειδη
χρωστάει βιβλία.

Για το format της ώρας σκέφτηκα πως θα μπορούσα να βάλω και timestamp, αλλά μία δανειστική βιβλιοθήκη δεν ενδιαφέρεται παρά μόνο για τις ημερομηνίες
και κατά πόσες μέρες έχεις ξεφύγει, οπότε η ώρα δεν θα είχε κάποιο νόημα.

Διαχώρισα το main.css αρχείο σε μικρότερα ανάλογα την σελίδα για να είναι τμηματοποιημένος ο κώδικας

Φτιάχνοτας τη σελίδα για manage books σκέφτηκα πως θέλω να είναι μία συμπυκνωμένη λίστα με τις απαραίτητες πληροφορίες για το βιβλίο, δηλαδή
όνομα, ISBN και αν είναι διαθέσιμο ή όχι. Το πεδιό summary είναι σημαντικό, αλλά όχι για έναν admin χρήστη ο οποίος θέλει απλά να δανείζει
και να επιστρέφει βιβλία. Αν έκανα render το summary κάθε βιβλίου εξαρχής, το dom θα γέμιζε από τα πρώτα βιβλία, από την άλλη αν το έβαζα
να εμφανίζεται δυναμικά, θα πρόσθετα μία πληροφορία η οποία δεν έχει νόημα για τον admin χρήστη, αλλά για τον απλό χρήστη που θέλει να δανειστεί
το βιβλίο. Αν υπήρχαν ρόλοι ίσως θα άξιζε, αλλά όπως είναι τώρα δεν πιστεύω πως χρειάζεται.

Τελικά έβαλα και το summary, κάνοντάς το render στα πλάγια της σελίδας, σε έναν χώρο που δεν χρησιμοποιούνταν από το BOOTSTRAP template
που χρησιμοποιούσα.

Εκ των υστέρων καταλαβαίνω πως είναι λίγο περιοριστικό το database schema μου ακριβώς γιατί το Registry κρατά πλήρες ιστορικό. Έτσι, αν αναζητήσω
βιβλίο θα βρω και όλες τις παλαιότερες καταχωρήσεις για βιβλία που πλέον όμως έχουν επιστραφεί.

Έχασα πολύ χρόνο προσπαθώντας να βρω ένα query που θα μου επέστρεφε και όλα τα βιβλία και για όσα είναι δανεισμένα αυτή τη στιγμή ποιος τα έχει, αλλά δεν κατάφερα να βρω κάτι που θα να με ικανοποιούσε (κυρίως γιατί τα left joins που σκεφτόμουν θα έκαναν κάπως πολύπλοκα τα πράγματα κατά τη διάρκεια του front end parsing της πληροφορίας σε συνδυασμό πως είχα καιρό να γράψω php και δεν ήθελα να χάσω πολύ χρόνο στο να βρω πώς θα μπορούσα να φτιάξω ένα JSON το οποίο θα έπρεπε να συμπληρώσω loopάροντας μέσα από τα αποτελέσματα ενός σύνθετου query).

Κατέληξα με την λύση ενός δεύτερου ajax call στη βάση για να βρω ακριβώς όσους έχουν δανεισμένα βιβλία και μετά να τους αντιστοιχήσω στην λίστα βιβλίων
που έχω κάνει ήδη render.
Το γεγονός πως για μία σελίδα και μία ενοποιημένη διαισθητικά πληροφορία κάνω δύο calls είναι σίγουρα ένα αδύναμο σημείο του implementation
το οποίο αν συνέχιζα το development αυτής της εφαρμογής οπωσδήποτε θα διόρθωνα.

Συνέχισα με το loan book page γεμίζοντας στην αρχή τη λίστα με όλα τα βιβλία που έχουν διαθέσιμα αντίτυπα και ύστερα επιλέγοντας
όλους τους χρήστες που δεν έχουν ήδη δανειστεί 3. Στη συνέχεια κρατώ σε ένα javascript variable μία λίστα με όλα τα users id που έχουν δανεισμένο βιβλίο
αυτή τη στιγμή, έτσι ώστε ο έλεγχος να γίνεται client side και να μην χτυπάω τον server για τέτοια μικρά queries.

Η λογική είναι πως όταν πάει να γίνει ανάθεση, ο χρήστης σίγουρα δεν έχει 3 αντίτυπα, γιατί έχω φέρει μόνο όσους έχουν < 3 και αν έχει ήδη το αντίγραφο
θα το βρω στο front end στο mini-registry object που έχω ήδη φορτώσει. Αν δεν το έχει ήδη, τότε μπορώ να κάνω load το βιβλίο και να του το αναθέσω.

Γενικά μου αρέσει περισσότερο να χρεώνομαι ένα ελάχιστο επιπλέον loading time στο page loading, από το να χτυπάω με πολλά queries τη βάση εκ των υστέρων.
Είναι και καλύτερο για το security να μην κάνεις expose τόσο εύκολα database hits.

Hours worked: 11:50 -> end of day

22/9

Μένει να τελειώσω τη loan book σελίδα και μετά να τη φτιάξω τη return book.

Εκ των υστέρων παρατηρώ πως κάποια php αρχεία πραγματοποιούν παρόμοια queries υπό το ίδιο http request. Σκέφτηκα πως θα μπορούσα
να τα ενοποιήσω, αλλά δεν ήθελα να γυρίσω πίσω σε δουλειά που είχε ήδη τελείωσει γιατί λόγω πίεσης χρόνου ήθελα να τελειώσω Κυριακή.
(Ίσως κάποιο γενικό php αρχείο που δέχεται γενικά ένα query αντί για ένα αρχείο ανά query;).

Πρόσθεσα ER diagram, README, οδηγίες εγκατάστασης και το devopment diary.

Υ.Γ Δεν πρόσθεσα ποτέ form validations. Για να γίνουν σωστά πρέπει να γίνουν και στο front και στο back end και θεώρησα πως για τους σκοπούς αυτού
του assignment (να αποτελέσει βάση για ένα techincal inverview) θα έπαιρναν δυσανάλογα πολύ χρόνο (ειδικά γιατί θα έπρεπε να τα κάνω και στο back end).

Ωστόσο, όπως είπα, αν έπρεπε να τα κάνω θα επέλεγα parsley, γιατί φτιάχνει αυτόματα error messages και θα μπορούσα να διαφοροποιήσω το validation logic
από τα page specific scripts.

Hours worked: 11:00 -> end of day