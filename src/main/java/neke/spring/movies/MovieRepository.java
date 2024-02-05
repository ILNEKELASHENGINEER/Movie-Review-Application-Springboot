package neke.spring.movies;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Repository
//data - access layer

public interface MovieRepository extends MongoRepository<movie,ObjectId> {
    Optional<movie> findMovieByImdbId(String imdbId);
}

